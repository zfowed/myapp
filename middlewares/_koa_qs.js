
const koaQs = require('koa-qs')

module.exports = function (app) {
	return koaQs(app);
};