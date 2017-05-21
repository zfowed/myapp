const { routes_examples } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/route/list';

/** @type {String} 说明 */
module.exports.description = '获取路由列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {
	return new Promise(async (resolve, reject) => {
		const res = routes_examples
			// 筛选是应用级的路由实例
			.filter(item=>typeof item.id === 'number')
			// 过滤字段
			.map(item=>{
				const { id, uri, method, description, updated_at } = item;
				return { id, uri, method, description, updated_at };
			});
		return resolve(res);
	});
};
