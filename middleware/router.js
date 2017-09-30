const fs = require('fs');

module.exports = function(app, config) {
  let urlRules = config.URL_RULES;

  let list = fs.readdirSync(join('routers'));
  let mainRouter = require(join('routers', 'main'));
  list.forEach(filename => {
    if (!filename.match(/\.js$/) || filename === 'main.js') {
      return true;
    }
    let keyname = '/' + filename.replace(/\.js$/, '');
    let router = require(join('routers', filename));
    router.routes().router.stack.forEach(layer => {
      let url = `${keyname}${layer.path}`;
      let redirect = urlRules[url] || urlRules[url.replace(/\/$/, '')];
      if (redirect) {
        let arr = Object.assign([], layer.stack);
        arr.unshift(redirect);
        mainRouter.get.apply(mainRouter, arr);
      }
    });
    mainRouter.use(keyname, router.routes(), router.allowedMethods());
  });

  app.use(mainRouter.routes(), mainRouter.allowedMethods());
};

