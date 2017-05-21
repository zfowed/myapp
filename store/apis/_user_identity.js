
/** @type {String} 标识 */
module.exports.mark = 'core/user/identity';

/** @type {String} 说明 */
module.exports.description = '获取当前身份';

/** @type {String} 验证模式 */
module.exports.verification = 0;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	return statusFun({
		user: ctx.session.identity.user,
		role: ctx.session.identity.role.name
	});
};
