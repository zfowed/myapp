const { database_core: { routes: routesDB }, routes_examples, router } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/route/del';

/** @type {String} 说明 */
module.exports.description = '删除路由';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {

		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		/** 查找路由实例 */
		const examplesIndex = routes_examples.findIndex(item=>item.id===id);
		const layerIndex = router.stack.findIndex(item=>item.name===`app-${id}`);
		
		if (examplesIndex < 0 || layerIndex < 0) {
			return reject('找不到ID为${id}的路由实例');
		}

		// 删除
		try {
			await routesDB.destroy({ where: { id } });
			routes_examples.splice(examplesIndex, 1);
			router.stack.splice(layerIndex, 1);
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
