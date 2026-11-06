import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const personSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://emstudios.tech/ehabalhayek/#person",
      "name": "Ehab Alhayek",
      "alternateName": [
        "Ehab M. Alhayek",
        "Ehab Mohammed Alhayek"
      ],
      "url": "https://emstudios.tech/ehabalhayek/",
      "jobTitle": "Founder & Developer",
      "worksFor": {
        "@id": "https://emstudios.tech/#organization"
      },
      "sameAs": [
        "https://www.linkedin.com/in/ehabmalhayek",
        "https://github.com/ethanmarten",
        "https://www.instagram.com/ehab.__.mohammed/"
      ],
      "image": "https://emstudios.tech/ehab-alhayek.webp"
    },
    {
      "@type": "Organization",
      "@id": "https://emstudios.tech/#organization",
      "name": "EM Studios",
      "url": "https://emstudios.tech/",
      "description": "Digital product and technology studio providing web development, digital design, AI automation, and technology collaboration.",
      "email": "contact@emstudios.tech",
      "logo": {
        "@type": "ImageObject",
        "url": "https://emstudios.tech/assets/em-studios-logo.svg",
        "width": 512,
        "height": 512
      },
      "founder": {
        "@id": "https://emstudios.tech/ehabalhayek/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://emstudios.tech/ehabalhayek/#profile",
      "url": "https://emstudios.tech/ehabalhayek/",
      "name": "Ehab Alhayek — Founder of EM Studios & Web Developer",
      "mainEntity": {
        "@id": "https://emstudios.tech/ehabalhayek/#person"
      },
      "isPartOf": {
        "@id": "https://emstudios.tech/#website"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://emstudios.tech/ehab-alhayek.webp",
        "width": 1024,
        "height": 1024,
        "caption": "Ehab Alhayek, founder of EM Studios"
      }
    }
  ]
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href={import.meta.env.BASE_URL}
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ehab Alhayek — Founder of EM Studios & Web Developer" },
      { name: "description", content: "Ehab Alhayek, founder and developer at EM Studios. Explore his work in web development, digital design, AI automation, and technology projects." },
      { name: "author", content: "Ehab Alhayek" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "EM Studios" },
      { property: "og:title", content: "Ehab Alhayek — Founder of EM Studios & Web Developer" },
      { property: "og:description", content: "Ehab Alhayek, founder and developer at EM Studios. Explore his work in web development, digital design, AI automation, and technology projects." },
      { property: "og:type", content: "profile" },
      { property: "og:image:alt", content: "Ehab Alhayek, founder of EM Studios" },
      { property: "og:image:width", content: "1024" },
      { property: "og:image:height", content: "1024" },
      { name: "twitter:image:alt", content: "Ehab Alhayek, founder of EM Studios" },
      { property: "og:url", content: "https://emstudios.tech/ehabalhayek/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ehab Alhayek — Founder of EM Studios & Web Developer" },
      { name: "twitter:description", content: "Ehab Alhayek, founder and developer at EM Studios. Explore his work in web development, digital design, AI automation, and technology projects." },
      { property: "og:image", content: "https://emstudios.tech/ehab-alhayek.webp" },
      { name: "twitter:image", content: "https://emstudios.tech/ehab-alhayek.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: "https://emstudios.tech/ehabalhayek/" },
      { rel: "icon", type: "image/png", href: `${import.meta.env.BASE_URL}favicon.png` },
      { rel: "shortcut icon", href: `${import.meta.env.BASE_URL}favicon.png` },
      { rel: "apple-touch-icon", href: `${import.meta.env.BASE_URL}favicon.png` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(personSchema),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
