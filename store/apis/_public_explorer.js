
var sendfile = require('koa-sendfile');
const path = require("path");

/** @type {String} 标识 */
module.exports.mark = 'core/public/explorer';

/** @type {String} 说明 */
module.exports.description = '静态文件管理';

/** @type {String} 验证模式 */
module.exports.verification = 2;

/** @type {Boolean} 是否开启【multipart/form-data】文件上传 */
module.exports.multipart_file = false;

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {

	try {
		const { method } = params;
		const publicToTool = ctx.getTool('core/public/explorer');

		if (method === 'readdir' || method === 'mkdir' || method === 'remove' || method === 'zipDecrypt') {
			const { src } = params;
			const res = await publicToTool(method, src);
			return statusFun(res);
		} else if (method === 'copy' || method === 'move') {
			const { src, dest } = params;
			const res = await publicToTool(method, src, dest);
			return statusFun(res);
		} else if (method === 'zipEncrypt') {
			const { path, dest, srcList } = params;
			const res = await publicToTool(method, path, dest, srcList);
			return statusFun(res);
		} else if (method === 'download') {
			let { src } = params;
			src = await publicToTool('path', src);
			const basename = path.basename(src);
			ctx.set('Content-Type', 'application/octet-stream');
			ctx.set('Content-Disposition', `attachment; filename=${encodeURIComponent(basename)}`);
			await sendfile(ctx, src);
			return false;
		} else {
			return statusFun(412, `不支持${method}`);
		}



	} catch (err) {
		return statusFun(412, `${err}`);
	}



	return statusFun();

};
