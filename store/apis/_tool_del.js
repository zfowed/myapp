
/** @type {String} 标识 */
module.exports.mark = 'core/tool/del';

/** @type {String} 说明 */
module.exports.description = '删除工具方法';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const { id } = params;

	try {
		const toolDelTool = ctx.getTool('core/tool/del');
		await toolDelTool(id);
		return statusFun('删除成功！');
	} catch (err) {
		return statusFun(412, `${err}`);
	}
};
