
/** @type {String} 标识 */
module.exports.mark = 'core/tool/list';

/** @type {String} 说明 */
module.exports.description = '获取工具方法列表';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const toolListTool = ctx.getTool('core/tool/list');
	const toolListData = await toolListTool();
	return statusFun(toolListData);

};
