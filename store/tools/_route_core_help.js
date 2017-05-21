const { routes_examples } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/route/core/help';

/** @type {String} 说明 */
module.exports.description = '获取核心路由使用说明';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (core_id) {




	if (typeof core_id !== 'string' || core_id === '') {
		return reject(`找不到ID为[${core_id}]的路由实例`);
	}

	const route = routes_examples.find(item=>item.core_id===core_id)

	if (!route) {
		return reject(`找不到ID为[${core_id}]的路由实例`);
	}

	return route.readme || '';

};
