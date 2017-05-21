
const sha1 = require('../../function/sha1');
const { config, database_core: { roles: rolesDB, users: usersDB } } = require('../index');

const srootUser = config.get('user.sroot.user').value();
const pwdKey = config.get('user.pwd_sha1_key').value();

/** @type {String} 标识 */
module.exports.mark = 'core/user/add';

/** @type {String} 说明 */
module.exports.description = '添加用户';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (parameters) {
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
		if (typeof user !== 'string' || user === '') {
			return reject('"user"必须是一个不允许为空的字符串');
		} else if (typeof password !== 'string' || password === '') {
			return reject('"password"必须是一个不允许为空的字符串');
		} else if (typeof role_id !== 'number' || role_id < 1) {
			return reject('"role_id"必须是一个合法的ID');
		} else if (typeof description !== 'string' || description === '') {
			return reject('"description"必须是一个不允许为空的字符串');
		} else if (user === srootUser || user === 'guest') {
			return reject(`已经存在${user}用户了`);
		}

		const userDataExample = await usersDB.findOne({ where: { user } });
		if (userDataExample) {
			return reject(`已经存在${user}用户了`);
		}

		const roleDataExample = await rolesDB.findOne({ where: { id: role_id } });
		if (!roleDataExample) {
			return reject(`找不到ID为${role_id}用户角色`);
		}

		/** 添加 */
		try {
			password = sha1(pwdKey, password);
			await usersDB.create({ user, password, role_id, description });
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
