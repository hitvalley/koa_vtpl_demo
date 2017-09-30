const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const middleware = require('./middleware/index');

global.APP_PATH = __dirname;
global.join = function() {
  let args = Array.prototype.slice.apply(arguments).filter(item => item);
  args.unshift(APP_PATH);
  return path.join.apply(path, args);
};
global.config = require('./config/config');

let app = new Koa();

if (config.ENV === 'dev') {
  let koaStatic = require('koa-static');
  app.use(koaStatic(join(config.STATIC_PATH)));
}

middleware(app, config);

// listen
app.listen(config.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('http://localhost:' + config.PORT);
  }
});

