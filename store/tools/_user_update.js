const sha1 = require('../../function/sha1');
const { config, database_core: { roles: rolesDB, users: usersDB } } = require('../index');

const pwdKey = config.get('user.pwd_sha1_key').value();

/** @type {String} 标识 */
module.exports.mark = 'core/user/update';

/** @type {String} 说明 */
module.exports.description = '更新用户资料';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id, parameters) {
	return new Promise(async (resolve, reject) => {

		if (typeof parameters !== 'object') {
			return reject('"parameters"必须是一个对象');
		}
		
		/** @type {String} user         用户名 */
		/** @type {String} password     密码 */
		/** @type {String} role_id      角色ID */
		/** @type {String} description  说明 */
		let { user, password, role_id, description } = parameters;


		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		} else if (typeof user !== 'string' || user === '') {
			return reject('"user"必须是一个不允许为空的字符串');
		} else if (password && typeof password !== 'string') {
			return reject('"password"必须是一个不允许为空的字符串');
		} else if (typeof role_id !== 'number' || role_id < 1) {
			return reject('"role_id"必须是一个合法的ID');
		} else if (typeof description !== 'string' || description === '') {
			return reject('"description"必须是一个不允许为空的字符串');
		}


		const roleDataExample = await rolesDB.findOne({ where: { id: role_id } });
		if (!roleDataExample) {
			return reject(`找不到ID为${role_id}用户角色`);
		}

		/** 更新 */
		try {
			password = password ? sha1(pwdKey, password) : undefined;
			if (password) {
				await usersDB.update({ user, password, role_id, description }, { where: { id } });
			} else {
				await usersDB.update({ user, role_id, description }, { where: { id } });
			}
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};