const fs = require('fs');
const views = require('./vtpl-koa2');

module.exports = function(app, config) {
  let viewPath = config.VIEW_PATH;
  app.use(views(viewPath, config));
};
