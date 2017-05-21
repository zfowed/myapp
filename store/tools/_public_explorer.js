
const fs = require('fs');
const path = require('path');

const Explorer = require('../../function/Explorer');

const { config } = require('../index');

const publicExplorer = new Explorer(config.get('static_service.path').value());

/** @type {String} 标识 */
module.exports.mark = 'core/public/explorer';

/** @type {String} 说明 */
module.exports.description = '静态文件管理';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (method, ...params) {
	return new Promise(async (resolve, reject) => {
		if (!publicExplorer[method]) {
			return reject(`没有[${method}]方法！`);
		}
		return publicExplorer[method](...params).then(resolve, reject);
	});
};
