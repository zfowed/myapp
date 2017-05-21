const { database_core: { tools: toolsDB }, tools_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/tool/del';

/** @type {String} 说明 */
module.exports.description = '删除工具';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {

		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		/** 查找工具实例 */
		const examples = Object.values(tools_examples).find(item=>item.id===id);
		if (!examples) {
			return reject(`找不到ID为${id}的工具实例`);
		}

		// 删除
		try {
			await toolsDB.destroy({ where: { id } });
			delete tools_examples[examples.mark];
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
