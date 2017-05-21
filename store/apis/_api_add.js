
/** @type {String} 标识 */
module.exports.mark = 'core/api/add';

/** @type {String} 说明 */
module.exports.description = '添加API';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	try {
		const apiAddTool = ctx.getTool('core/api/add');
		await apiAddTool(params);
		return statusFun('添加成功！');
	} catch (err) {
		return statusFun(412, `${err}`);
	}
};
