
/** @type {String} 标识 */
module.exports.mark = 'core/checkCode';

/** @type {String} 说明 */
module.exports.description = '检查代码';

/** @type {String} 验证模式 */
module.exports.verification = 3;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	const { code, config } = params;

	const checkCodeTool = ctx.getTool('core/checkCode');
	const errInfo = await checkCodeTool(code, config);

	const err = errInfo[0];
	if (err) {
		const line = err.line;
		const fatal = err.fatal;
		const source = err.source;
		const message = err.source;
		const msg = `line(${line}): ` + (fatal ? source : message);
		return statusFun(-200, msg, errInfo);
	}

	return statusFun(errInfo);
	
};