
const fs = require('fs');
const path = require('path');

const Explorer = require('../../function/Explorer');

const { config } = require('../index');

const viewsExplorer = new Explorer(config.get('views.path').value());

/** @type {String} 标识 */
module.exports.mark = 'core/views/explorer';

/** @type {String} 说明 */
module.exports.description = '视图文件管理';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (method, ...params) {
	return new Promise(async (resolve, reject) => {
		if (!viewsExplorer[method]) {
			return reject(`没有[${method}]方法！`);
		}
		return viewsExplorer[method](...params).then(resolve, reject);
	});
};
