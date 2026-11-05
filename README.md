# EM Studios domain routing and Ethan's portfolio

The existing Vercel project remains attached to `emstudios.tech` and `www.emstudios.tech`. Its routing brings two independently deployed sites under the same domain:

| Public path | Site |
| --- | --- |
| `/` | The company site from `https://em-studios-gamma.vercel.app/` |
| `/ethanmarten/` | The existing personal portfolio in this repository |

`vercel.json` uses CDN rewrites for the company page, stylesheet, script, favicon, images, and videos. The browser keeps the custom domain, and future production deployments of the company project appear automatically. There is no iframe and no need to transfer the domain between projects.

Vite's `/ethanmarten/` base also configures TanStack Start's router and generated asset URLs. Personal images, scripts, styles, and the favicon resolve within that namespace through the first rewrites. Keep these rules before the company asset rule. `/ethanmarten` redirects to `/ethanmarten/`.

The original CV download link remains `/ehab-alhayek-cv.pdf`, served by this project's existing public file. A prefixed `/ethanmarten/ehab-alhayek-cv.pdf` alias is also available. The personal page component and its existing public contact details are unchanged.

The personal page's layout, content, interactions, and contact links are retained. Its canonical URL and Person structured data now use the personal path. The company and personal page keep their own styles and asset names.

## Local development

Install the versions in `bun.lock`, then run `bun run dev` and open `/ethanmarten/`. Company CDN rewrites are applied by Vercel, so the root company page must be checked on a Vercel preview deployment.

For a build matching Vercel: `VERCEL=1 bun run build`. The Vercel project must keep using this repository for its Git deployments and retain its existing custom domains.
