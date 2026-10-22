# Dingling Yao’s website

React + Vite portfolio, published at https://dinglingyao.github.io/.

## Build and deploy

Use Node.js 20.19+ or 22.12+ and run:

```sh
npm ci
npm run build
npm run preview
```

The build generates the page content in `dist/index.html`, then React hydrates
it in the browser. Keep motion content visible on initial render so the page
also works before JavaScript loads. Vite generates the asset URLs for both builds.

The GitHub Actions workflow builds pushes to `main` or `master` and publishes
`dist` to `gh-pages`. GitHub Pages must serve that branch from its root.
The local Git remote currently names `DDCoan/DDCoan.github.io`; verify that
this repository actually publishes the intended `dinglingyao.github.io` site.

## Google indexing after deployment

1. Add `https://dinglingyao.github.io/` as a URL-prefix property in Google Search Console and verify ownership. If using an HTML verification file, place Google's supplied file in `public/` and deploy it.
2. Submit `https://dinglingyao.github.io/sitemap.xml` in Search Console.
3. Inspect `https://dinglingyao.github.io/`, test the live URL, and request indexing.
4. Check the Page indexing report for any remaining exclusions.

The canonical URL, structured data, sharing metadata, and sitemap use the same
public address. `public/robots.txt` allows crawling. Indexing and ranking are
Google's decision; these settings do not guarantee inclusion or immediate results.

Google's instructions: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
