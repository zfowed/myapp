

const { config } = require('../index');
const srootUser = config.get('user.sroot.user').value();


/** @type {String} 标识 */
module.exports.mark = 'core/login';

/** @type {String} 说明 */
module.exports.description = '登录';

/** @type {String} 验证模式 */
module.exports.verification = 0;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const { user, password } = params;

	let result;
	if (user === srootUser) {
		const checkTool = ctx.getTool('core/sroot/check');
		result = await checkTool(password);
	} else {
		const checkTool = ctx.getTool('core/user/check');
		result = await checkTool(user, password);
	}
	if (!result) { return statusFun(412, '账号或密码错误！'); }
	ctx.session.identity = result;
	return statusFun('登录成功！', {
		user: ctx.session.identity.user,
		role: ctx.session.identity.role.name
	});
};
