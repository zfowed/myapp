
const uuidV4 = require('uuid/v4');

const { app } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/guest/verification/set';

/** @type {String} 说明 */
module.exports.description = '修改来宾用户的验证模式';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	try {
		const { effective } = params;
		const guestVerificationTool = ctx.getTool('core/guest/verification/set');
		await guestVerificationTool(params);
		if (effective) { app.keys = [uuidV4()]; }
		return statusFun('设置成功！');
	} catch (err) {
		return statusFun(412, `${err}`);
	}
};
