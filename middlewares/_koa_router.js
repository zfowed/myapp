
const  { router } = require('../store/index');

module.exports = function (app) {
	app.use(async function (ctx, next) {
		/** 容错 */
		try {
			await next();
		} catch (err) {
			return ctx.throw(500, err);
		}
	});
	return app.use(router.routes());
};