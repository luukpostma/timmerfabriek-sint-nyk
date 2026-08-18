import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const headers = readFileSync(join(distDirectory, '_headers'), 'utf8');

function findHtmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) return findHtmlFiles(path);
    return entry.isFile() && entry.name.endsWith('.html') ? [path] : [];
  });
}

function hash(content) {
  return `sha256-${createHash('sha256').update(content).digest('base64')}`;
}

const inlineScripts = new Set();
const inlineStyles = new Set();
let styleAttributeCount = 0;

for (const file of findHtmlFiles(distDirectory)) {
  const html = readFileSync(file, 'utf8');

  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const [, attributes, content] = match;
    const isExternal = /\bsrc\s*=/i.test(attributes);
    const isStructuredData = /\btype\s*=\s*(["'])application\/ld\+json\1/i.test(attributes);

    if (!isExternal && !isStructuredData) inlineScripts.add(content);
  }

  for (const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    inlineStyles.add(match[1]);
  }

  styleAttributeCount += html.match(/\sstyle\s*=/gi)?.length ?? 0;
}

const missingScriptHashes = [...inlineScripts].map(hash).filter((value) => !headers.includes(value));
const missingStyleHashes = [...inlineStyles].map(hash).filter((value) => !headers.includes(value));
const failures = [];

if (headers.includes("'unsafe-inline'")) failures.push("de CSP bevat 'unsafe-inline'");
if (styleAttributeCount > 0) failures.push(`de build bevat ${styleAttributeCount} inline style-attributen`);
if (missingScriptHashes.length > 0) {
  failures.push(`ontbrekende scripthashes: ${missingScriptHashes.join(', ')}`);
}
if (missingStyleHashes.length > 0) {
  failures.push(`ontbrekende stijlhashes: ${missingStyleHashes.join(', ')}`);
}

if (failures.length > 0) {
  console.error(`CSP-validatie mislukt:\n- ${failures.join('\n- ')}`);
  process.exit(1);
}

console.log(
  `CSP geldig: ${inlineScripts.size} inline scripts en ${inlineStyles.size} inline stijlelementen zijn met hashes toegestaan.`,
);
