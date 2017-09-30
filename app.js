const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const config = require('./config/config');
const middleware = require('./middleware/index');

global.APP_PATH = __dirname;
global.join = function() {
  let args = Array.prototype.slice.apply(arguments);
  args.unshift(APP_PATH);
  return path.join.apply(path, args);
};
global.env = config.ENV;

let app = new Koa();

if (env === 'dev') {
  let koaStatic = require('koa-static');
  let { spawn } = require('child_process');
  let res = spawn('gulp', ['--env', env]);
  res.stdout.on('data', data => glog.info(data.toString()));
  if (env === 'dev') {
    app.use(koaStatic(join('assets/static')));
  } else {
    app.use(koaStatic(join('dist/static')));
  }
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

