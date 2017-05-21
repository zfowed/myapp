/** @type {Function} 获取工具控制器 */
const { getTool } = require('../store/index');

module.exports = function (app) {
	return app.use(async function (ctx, next) {
		ctx.getTool = getTool;
		return next();
	});
};