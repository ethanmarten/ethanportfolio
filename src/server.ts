import "./lib/error-capture";
import { createEmiHandler } from "./lib/emi-assistant.mjs";
import robots from "../public/robots.txt?raw";
import sitemap from "../public/sitemap.xml?raw";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;
const handleEmi = createEmiHandler();

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    if (url.hostname === "www.emstudios.tech") {
      url.hostname = "emstudios.tech";
      return Response.redirect(url.toString(), 308);
    }
    if (url.pathname === "/api/emi-chat") return handleEmi(request);
    const discoveryFiles: Record<string, { content: string; type: string }> = {
      "/robots.txt": { content: robots, type: "text/plain; charset=utf-8" },
      "/sitemap.xml": { content: sitemap, type: "application/xml; charset=utf-8" },
    };
    const discoveryFile = Object.hasOwn(discoveryFiles, url.pathname) ? discoveryFiles[url.pathname] : undefined;
    if (discoveryFile) {
      if (!["GET", "HEAD"].includes(request.method)) return new Response("Method not allowed", {status: 405, headers: {Allow: "GET, HEAD"}});
      return new Response(request.method === "HEAD" ? null : discoveryFile.content, {headers: {"Content-Type": discoveryFile.type, "Cache-Control": "public, max-age=0, s-maxage=60", "X-Content-Type-Options": "nosniff"}});
    }
    const serviceMatch = url.pathname.match(/^\/services\/(web-development|ui-ux-branding|ai-automation)\/?$/);
    if (serviceMatch) {
      if (!["GET", "HEAD"].includes(request.method)) return new Response("Method not allowed", {status: 405});
      try {
        const upstream = await fetch(`https://em-studios-gamma.vercel.app/services/${serviceMatch[1]}/`, {signal: AbortSignal.timeout(20000)});
        return new Response(request.method === "HEAD" ? null : upstream.body, {status: upstream.status, headers: {"Content-Type": "text/html; charset=utf-8", "Cache-Control": "public, max-age=0, s-maxage=60", "X-Content-Type-Options": "nosniff"}});
      } catch {
        return new Response("Service page temporarily unavailable", {status: 502});
      }
    }
    if (new URL(request.url).pathname === "/api/studio-locale") {
      const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
      const arabicCountries = new Set(["PS", "JO", "EG", "SA", "AE", "QA", "KW", "BH", "OM", "YE", "LB", "SY", "IQ", "MA", "DZ", "TN", "LY", "SD", "MR", "SO", "DJ", "KM"]);
      const fallback = (request.headers.get("accept-language") ?? "").toLowerCase().startsWith("ar");
      return Response.json({language: country ? (arabicCountries.has(country) ? "ar" : "en") : (fallback ? "ar" : "en")}, {headers: {"Cache-Control": "private, no-store"}});
    }
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

