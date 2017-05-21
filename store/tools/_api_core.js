const { apis_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/api/core';

/** @type {String} 说明 */
module.exports.description = '获取核心API列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {
	const res = Object.values(apis_examples)
		// 筛选是核心的API实例
		.filter(item=>typeof item.id === 'undefined')
		// 过滤字段
		.map(item=>{
			const { mark, verification, description } = item;
			return { mark, verification, description };
		});
	return res;
};
