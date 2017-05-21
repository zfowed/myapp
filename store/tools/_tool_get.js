const { tools_examples } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/tool/get';

/** @type {String} 说明 */
module.exports.description = '获取工具详细';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {

		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		/** 查找工具实例 */
		const examples = Object.values(tools_examples).find(item=>item.id===id)
		if (!examples) {
			return reject(`找不到ID为${id}的工具实例`);
		}

		// 筛选字段
		return resolve({
			id: examples.id,
			mark: examples.mark,
			description: examples.description,
			controller_code: examples.controller_code,
			updated_at: examples.updated_at,
			created_at: examples.created_at
		});


	});
};
