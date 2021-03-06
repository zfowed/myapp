
/** @type {String} 标识 */
module.exports.mark = 'core/role/list';

/** @type {String} 说明 */
module.exports.description = '获取用户角色列表';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const { unit_step, page_current, option } = params;

	try {
		const roleListTool = ctx.getTool('core/role/list');
		const roleListData = await roleListTool(unit_step, page_current, option);
		return statusFun(roleListData);
	} catch (err) {
		return statusFun(412, `${err}`);
	}

};
