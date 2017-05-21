const { database_core: { roles: rolesDB } } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/role/get';

/** @type {String} 说明 */
module.exports.description = '获取用户角色详细';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {
		
		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		
		const roleDataExample = await rolesDB.findOne({ where: { id } });

		if (roleDataExample) {
			const roleData = roleDataExample.get();
			roleData.verification_route = JSON.parse(roleData.verification_route);
			roleData.verification_api = JSON.parse(roleData.verification_api);
			return resolve(roleData);
		} else {
			return reject('找不到ID为${id}的用户角色');
		}

	});
};
