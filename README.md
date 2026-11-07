# EM Studios domain routing and Ehab's portfolio

The existing Vercel project remains attached to `emstudios.tech` and `www.emstudios.tech`. Its routing brings two independently deployed sites under the same domain:

| Public path | Site |
| --- | --- |
| `/` | The company site from `https://em-studios-gamma.vercel.app/` |
| `/ehabalhayek/` | The existing personal portfolio in this repository |

`vercel.json` uses CDN rewrites for the company page, stylesheet, script, favicon, images, and videos. The browser keeps the custom domain, and future production deployments of the company project appear automatically. There is no iframe and no need to transfer the domain between projects.

Vite's `/ehabalhayek/` base also configures TanStack Start's router and generated asset URLs. Personal images, scripts, styles, and the favicon resolve within that namespace through the first rewrites. Keep these rules before the company asset rule. `/ehabalhayek` redirects to `/ehabalhayek/`. The former `/ethanmarten` path and its descendants permanently redirect to the corresponding new paths.

The original CV download link remains `/ehab-alhayek-cv.pdf`, served by this project's existing public file. A prefixed `/ehabalhayek/ehab-alhayek-cv.pdf` alias is also available. The personal header and footer identify Ehab as the founder of EM Studios and link back to the company homepage. Existing public contact details and the CV file are retained.

The personal page's layout, content, interactions, and contact links are retained. Its canonical URL and Person structured data now use the personal path. The company and personal page keep their own styles and asset names.

## Local development

Install the versions in `bun.lock`, then run `bun run dev` and open `/ehabalhayek/`. Company CDN rewrites are applied by Vercel, so the root company page must be checked on a Vercel preview deployment.

For a build matching Vercel: `VERCEL=1 bun run build`. The Vercel project must keep using this repository for its Git deployments and retain its existing custom domains.

## Search visibility

Public pages are crawlable. `robots.txt` explicitly permits Google, Bing, and the search/fetch agents for ChatGPT, Claude, and Perplexity, while excluding `/api/`. The sitemap lists the company, three service pages, and Ehab's canonical profile. The gateway repository (`ethanportfolio`) serves its own discovery files directly, including a server fallback, so discovery no longer depends on an upstream deployment. Keep the discovery files in both repositories aligned when adding public pages.

The profile's server-rendered metadata and Person/ProfilePage data describe Ehab as an AI and web developer, AI Engineering student, and founder of EM Studios in Gaza, Palestine. The company uses the same Person ID and role. No training audience numbers or additional credentials are inferred.

### Cloudflare access

Repository rules do not override Cloudflare's edge policies or managed robots response. In Cloudflare, review **Security → Settings → AI Crawler and Agent access policies** and allow Search traffic and the intended personal agents. Keep API protections in place. Use Security Events to inspect blocks before changing rules. Error `1010` refers to browser-signature blocking / Browser Integrity Check; a failed library-default request alone does not prove verified search crawlers are blocked. Verify the custom domain with Search Console's live URL inspection and inspect the final public robots response after policy changes. GPTBot's model-training policy is separate from OAI-SearchBot's search access.
