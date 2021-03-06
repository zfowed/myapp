
/** @type {String} 标识 */
module.exports.mark = 'core/route/update';

/** @type {String} 说明 */
module.exports.description = '更新路由';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	try {
		const routeUpdateTool = ctx.getTool('core/route/update');
		await routeUpdateTool(params.id, params);
		return statusFun('修改成功！');
	} catch (err) {
		return statusFun(412, `${err}`);
	}
};
