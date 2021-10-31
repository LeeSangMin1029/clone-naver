const p = Deno.run({
  cmd: [
    'deno',
    'bundle',
    '--config',
    'deno.json',
    '--importmap=import_map.json',
    'src/components/client.tsx',
    'public/js/client.js',
  ],
});
const code = await p.status();
if (code.success) {
  console.log('bundling success!!');
} else {
  console.log('bundling failure..');
}
