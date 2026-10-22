import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";

// Use Vite's production asset URLs in the HTML, just like the browser bundle.
const output = new URL("../node_modules/.site-prerender/", import.meta.url);
try {
  await build({
    build: {
      ssr: "src/entry-server.mjsx",
      outDir: output.pathname,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
    },
  });
  const { render } = await import(new URL("entry-server.mjs", output));
  const page = new URL("../dist/index.html", import.meta.url);
  const template = await readFile(page, "utf8");
  const marker = '<div id="root"></div>';
  if (!template.includes(marker)) throw new Error("Missing prerender root");
  await writeFile(page, template.replace(marker, () => `<div id="root">${render()}</div>`));
} finally {
  await rm(output, { recursive: true, force: true });
}
