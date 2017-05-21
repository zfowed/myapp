
/** @type {String} 标识 */
module.exports.mark = 'core/guest/verification';

/** @type {String} 说明 */
module.exports.description = '获取来宾用户的验证模式';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	try {
		const guestVerificationTool = ctx.getTool('core/guest/verification');
		const guestVerification = await guestVerificationTool(params);
		return statusFun(guestVerification);
	} catch (err) {
		return statusFun(412, `${err}`);
	}
};
