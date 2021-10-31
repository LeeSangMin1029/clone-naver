import { Application } from 'oak';
import { green, yellow } from 'fmt-color';
import routes from 'routes/mod.ts';

const app = new Application();

// routes
app.use(routes.middleware.routes());
app.use(routes.middleware.allowedMethods());
app.use(routes.home.allowedMethods());
app.use(routes.home.routes());

// main entry
app.addEventListener('listen', ({ hostname, port, secure }) => {
  const protocol = secure ? 'https://' : 'http://';
  const url = `${protocol}${hostname ?? 'localhost'}:${port}`;
  console.log(`${green('Listening on')}: ${yellow(url)}`);
});
await import('./bundler.ts');
await app.listen({ port: 8000 });
