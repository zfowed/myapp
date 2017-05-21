const { routes_examples } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/route/core';

/** @type {String} 说明 */
module.exports.description = '获取核心路由列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {
	return new Promise(async (resolve, reject) => {
		const res = routes_examples
			// 筛选是核心的路由实例
			.filter(item=>typeof item.id === 'undefined')
			// 过滤字段
			.map(item=>{
				const { core_id, uri, method, description } = item;
				return { core_id, uri, method, description };
			});
		return resolve(res);
	});
};
