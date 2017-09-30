const router = require('koa-router')();

router.get('/', async ctx => {
  await ctx.render('main', {
    text: 'Hello Koa!',
    auth: 'valley'
  });
});

module.exports = router;
