module.exports = function(app, config) {
  app.use(async (ctx, next) => {
    let errorObj;
    await next().then(() => {
      if (ctx.status === 404) {
        errorObj = {
          code: '404',
          msg: '网络异常，加载失败'
        };
      }
    }).catch(err => {
      // ctx.errorInfo = err;
      glog.error('error in router', err.message);
      console.error(err);
      errorObj = ctx.erroInfo ? ctx.erroInfo : err;
    });
    if (errorObj && errorObj.code == -9001) {
      await ctx.redirect('/login');
    }
  });
};
