import { build } from 'esbuild';
import { cp, mkdir, rm } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('manifest.json', 'dist/manifest.json');
await cp('popup.template.html', 'dist/popup.html');
await cp('popup.css', 'dist/popup.css');

await build({ entryPoints: ['src/popup.ts', 'src/background.ts'], outdir: 'dist', bundle: true, format: 'iife', platform: 'browser', target: 'chrome120' });
console.log('Extension built in dist/');
