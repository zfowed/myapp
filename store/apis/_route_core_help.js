
/** @type {String} 标识 */
module.exports.mark = 'core/route/core/help';

/** @type {String} 说明 */
module.exports.description = '获取核心路由使用说明';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const { core_id } = params;

	const routeCoreHelpTool = ctx.getTool('core/route/core/help');
	return statusFun({
		readme: await routeCoreHelpTool(core_id)
	});
};
