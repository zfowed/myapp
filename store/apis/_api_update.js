
/** @type {String} 标识 */
module.exports.mark = 'core/api/update';

/** @type {String} 说明 */
module.exports.description = '更新API';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	try {
		const apiUpdateTool = ctx.getTool('core/api/update');
		await apiUpdateTool(params.id, params);
		return statusFun('更新成功！');
	} catch (err) {
		return statusFun(412, `${err}`);
	}
};
