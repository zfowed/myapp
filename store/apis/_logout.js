

const { config } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/logout';

/** @type {String} 说明 */
module.exports.description = '注销用户';

/** @type {String} 验证模式 */
module.exports.verification = 1;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	const guestData = config.get('user.guest').value();
	ctx.session.identity = guestData;
	return statusFun('注销成功！');
};
