const log4js = require('koa-log4');
const logger = log4js.getLogger('app');

const logConfig = require(join('config', 'log'));
log4js.configure(logConfig);

module.exports = function(app) {

  let errorLogger = log4js.getLogger('error');
  let appLogger = log4js.getLogger('app');
  let infoLogger = log4js.getLogger('info');
  let debugLogger = log4js.getLogger('debug');
  global.glog = {
    error: () => {
      errorLogger.error.apply(errorLogger, arguments);
      return false;
    },
    info: infoLogger.info.bind(infoLogger),
    app: appLogger.info.bind(appLogger),
    debug: env === 'test' || env === 'dev' || env === 'local' ? debugLogger.error.bind(debugLogger) : function(){}
  };

  // http request
  app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    glog.app(`${ctx.method} ${ctx.url} - ${ms}ms`)
  });
};

