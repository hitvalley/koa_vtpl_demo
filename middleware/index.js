let middlewareList = [
  'log',
  'error',
  'prepare',
  'render',
  'router'
];

function middleware(app, config) {
  middlewareList.forEach(filename => require(join('middleware', filename))(app, config));
}

module.exports = middleware;

