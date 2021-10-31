import { Router, send } from 'oak';

const router = new Router();
// public/assets/...     public/js/... 각각의 경로로 들어왔을 때 처리
router.get('/:type(public/assets|public/js|public/img)/:file', async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}`,
  });
});
export default router;
