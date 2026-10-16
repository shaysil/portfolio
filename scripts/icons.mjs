// Copies the brand logos used on the page from the pinned `simple-icons`
// devDependency into assets/icons/, filled with each brand's own colour.
// Run with `npm run icons`. The output is committed, so Pages needs no build.
import { mkdir, writeFile } from 'node:fs/promises';
import * as icons from 'simple-icons';

const slugs = [
  'claudecode', 'modelcontextprotocol', 'googlecloud',
  'typescript', 'javascript', 'python', 'react', 'angular', 'html5', 'css', 'jquery',
];

const outDir = new URL('../assets/icons/', import.meta.url);
await mkdir(outDir, { recursive: true });

for (const slug of slugs) {
  const icon = icons[`si${slug[0].toUpperCase()}${slug.slice(1)}`];
  if (!icon) throw new Error(`simple-icons has no icon "${slug}"`);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#${icon.hex}"><title>${icon.title}</title><path d="${icon.path}"/></svg>\n`;
  await writeFile(new URL(`${slug}.svg`, outDir), svg);
  console.log(`assets/icons/${slug}.svg  #${icon.hex}`);
}
