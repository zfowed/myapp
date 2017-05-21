const { database_core: { users: usersDB, roles: rolesDB } } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/user/get';

/** @type {String} 说明 */
module.exports.description = '获取用户详细';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {
		
		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		const userDataExample = await usersDB.findOne({
			attributes: { exclude: ['password'] },
			where: { id },
			include: { model: rolesDB }
		});

		if (userDataExample) {
			const userData = userDataExample.get();
			userData.role = userData.role.get();
			userData.role.verification_route = JSON.parse(userData.role.verification_route);
			userData.role.verification_api = JSON.parse(userData.role.verification_api);
			return resolve(userData);
		} else {
			return reject(`找不到ID为${id}的用户`);
		}

	});
};