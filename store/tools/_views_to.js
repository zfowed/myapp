const path = require('path');

/** @type {String} 标识 */
module.exports.mark = 'core/views/to';

/** @type {String} 说明 */
module.exports.description = '上传文件转移到视图文件文件夹';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (params, files, ctx, statusFun) {
	return new Promise(async (resolve, reject) => {

		const { src } = params;
		const { file } = files;


		/** 检查参数是否合法 */
		if (typeof src !== 'string' || src === '') {
			return reject(statusFun('"src"必须是一个不允许为空的字符串'));
		} else if (typeof file !== 'object' && file.path) {
			return reject(statusFun('"file"必须是一个File'));
		}

		try {
			const explorerTool = this.getTool('core/views/explorer');
			await explorerTool('move', file.path, path.join(src, file.name), true);
			return resolve(statusFun())
		} catch (err) {
			return resolve(statusFun(412, `${err}`));
		}
	});
};
