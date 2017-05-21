const { str2fun } = require('../../function/function_conversion');
const { database_core: { tools: toolsDB }, tools_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/tool/add';

/** @type {String} 说明 */
module.exports.description = '添加工具方法';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (parameters) {
	return new Promise(async (resolve, reject) => {

		if (typeof parameters !== 'object') {
			return reject('"parameters"必须是一个对象');
		}

		/** @type {String} mark                  标识 */
		/** @type {String} description           说明 */
		/** @type {String} controller_code       控制器代码 */
		const { mark, description, controller_code } = parameters;

		/** 检查参数是否合法 */
		if (typeof mark !== 'string' || mark === '') {
			return reject('"mark"必须是一个不允许为空的字符串');
		} else if (tools_examples[mark]) {
			return reject(`已经存在"${mark}"工具实例了`);
		} else if (typeof description !== 'string' || description === '') {
			return reject('"description"必须是一个不允许为空的字符串');
		} else if (typeof controller_code !== 'string' || controller_code === '') {
			return reject('"controller_code"必须是一个不允许为空的字符串');
		}

		/** 生成控制器方法 */
		let controller_method;
		try {
			controller_method = await str2fun(controller_code);
		} catch (err) {
			return reject(err);
		}

		/** 添加 */
		try {
			const toolDataExamples = await toolsDB.create({ mark, description, controller_code });
			const toolData = toolDataExamples.get();
			tools_examples[mark] = tools_examples[mark] = Object.assign({controller_method}, toolData);
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
