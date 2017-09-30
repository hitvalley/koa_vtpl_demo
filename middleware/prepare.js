const body = require('koa-bodyparser');
const json = require('koa-json');
const convert = require('koa-convert');

module.exports = function(app, config) {
  app.use(body());
  app.use(json());
  app.use(async (ctx, next) => {
    ctx.state = {
    };
    ctx.config = config;
    await next();
  });
};
