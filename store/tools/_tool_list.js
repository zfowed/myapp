const { tools_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/tool/list';

/** @type {String} 说明 */
module.exports.description = '获取工具列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {
	return new Promise(async (resolve, reject) => {
		const res = Object.values(tools_examples)
			// 筛选应用级的工具实例
			.filter(item=>typeof item.id === 'number')
			// 过滤字段
			.map(item=>{
				const { id, mark, description, updated_at } = item;
				return { id, mark, description, updated_at };
			});
		return resolve(res);
	});
};
