const { tools_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/tool/core/help';

/** @type {String} 说明 */
module.exports.description = '获取核心工具方法使用说明';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (mark) {


	if (typeof mark !== 'string' || mark === '' || !tools_examples[mark]) {
		return reject(`找不到[${mark}]的工具实例`);
	}

	return tools_examples[mark].readme || '';

};
