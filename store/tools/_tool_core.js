const { tools_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/tool/core';

/** @type {String} 说明 */
module.exports.description = '获取核心工具方法列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {
	return new Promise(async (resolve, reject) => {
		const res = Object.values(tools_examples)
			// 筛选是核心的工具实例
			.filter(item=>typeof item.id === 'undefined')
			// 过滤字段
			.map(item=>{
				const { mark, description } = item;
				return { mark, description };
			});
		return resolve(res);
	});
};
