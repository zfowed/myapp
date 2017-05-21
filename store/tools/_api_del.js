const { database_core: { apis: apisDB }, apis_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/api/del';

/** @type {String} 说明 */
module.exports.description = '删除API';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {

		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		/** 查找API实例 */
		const examples = Object.values(apis_examples).find(item=>item.id===id);
		if (!examples) {
			return reject(`找不到ID为"${id}"的API实例`);
		}

		// 删除
		try {
			await apisDB.destroy({ where: { id } });
			delete apis_examples[examples.mark];
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
