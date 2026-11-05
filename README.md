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
