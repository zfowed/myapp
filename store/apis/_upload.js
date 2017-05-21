
/** @type {String} 标识 */
module.exports.mark = 'core/upload';

/** @type {String} 说明 */
module.exports.description = '文件上传';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = true;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	try {
		const { tool: toolMark } = params;
		const tool = ctx.getTool(toolMark);
		if (tool) {
			return await tool(params, files, ctx, statusFun);
		}
		return statusFun(404, `这找不到${toolMark}`);
	} catch (err) {
		return statusFun(412, `${err}`);
	}

	return statusFun();

};
