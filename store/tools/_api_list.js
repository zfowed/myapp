const { apis_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/api/list';

/** @type {String} 说明 */
module.exports.description = '获取API列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {

	const res = Object.values(apis_examples)
		// 筛选是应用级的API实例
		.filter(item=>typeof item.id === 'number')
		// 过滤字段
		.map(item=>{
			const { id, mark, verification, description, updated_at } = item;
			return { id, mark, verification, description, updated_at  };
		});
		
	return res;
};
