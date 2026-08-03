# The Blue Door — Portugal Concierge & Relocation

Static homepage (v1 launch). Single self-contained `index.html` — all CSS,
fonts (Google Fonts CDN) and the logo (embedded as base64) are inline, so
no build step is required.

## Deploy (Cloudflare Pages)
1. Push this repo to GitHub.
2. In Cloudflare Pages → Create a project → Connect to Git → select this repo.
3. Build settings: Framework preset = None, Build command = (leave blank), Output directory = `/`.
4. Deploy, then add the custom domain `thebluedoor.pt` under the project's Custom Domains tab.
5. Add the DNS record Cloudflare shows you into EuroDNS's DNS zone for thebluedoor.pt.

Every future `git push` to `main` auto-redeploys the live site.
