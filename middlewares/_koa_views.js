const path = require('path');
const koaViews = require('koa-views');


const { getPath, config } = require('../store/index');


const viewsPath = config.get('views.path').value();
const viewsOption = config.get('views.option').value();

module.exports = function(app) {
	app.use(koaViews(getPath(viewsPath), viewsOption));
};