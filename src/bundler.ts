import { exec } from 'https://deno.land/x/exec@0.0.5/mod.ts';
const configFile = '--config ../deno.json';
const importMap = '--importmap=../import_map.json ';
const inSrc = './components/';
const outSrc = '../public/js/';
const command = `deno bundle ${configFile} ${importMap} ${inSrc}client.tsx ${outSrc}client.js`;
await exec(command);
