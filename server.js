const Koa = require('koa');
const Router = require('koa-router');
const koa = new Koa();
const app = new Router();

app.get('/some-external-resource', async ctx => {
  ctx.body = `Hello, external resource`;
});

app.get('/some-internal-resource/:name', async ctx => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});

koa.use(app.routes());
koa.listen(3000);
