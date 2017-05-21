const { apis_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/api/core/help';

/** @type {String} 说明 */
module.exports.description = '获取核心API使用说明';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (mark) {

	if (typeof mark !== 'string' || mark === '' || !apis_examples[mark]) {
		return reject(`找不到[${mark}]的API实例`);
	}

	return apis_examples[mark].readme || '';

};
