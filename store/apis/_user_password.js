
const { config } = require('../index');
const srootUser = config.get('user.sroot.user').value();

/** @type {String} 标识 */
module.exports.mark = 'core/user/password';

/** @type {String} 说明 */
module.exports.description = '修改当前用户密码';

/** @type {String} 验证模式 */
module.exports.verification = 1;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const { password } = params;
	const user = ctx.session.identity.user;

	try {
		if (user === srootUser) {
			const setPassword = ctx.getTool('core/sroot/password');
			await setPassword(password);
		} else {
			const setPassword = ctx.getTool('core/user/password');
			await setPassword(user, password);
		}
		return statusFun('修改密码成功！');
	} catch (err) {
		return statusFun(412, `${err}`);
	}

};
