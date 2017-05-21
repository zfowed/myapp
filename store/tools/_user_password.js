const sha1 = require('../../function/sha1');
const { config, database_core: { users: usersDB } } = require('../index');

const pwdKey = config.get('user.pwd_sha1_key').value();

/** @type {String} 标识 */
module.exports.mark = 'core/user/password';

/** @type {String} 说明 */
module.exports.description = '更新用户密码';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (user, password) {
	return new Promise(async (resolve, reject) => {


		/** 检查参数是否合法 */
		if (typeof user !== 'string' || user === '') {
			return reject('"user"必须是一个不允许为空的字符串');
		} else if (password && typeof password !== 'string') {
			return reject('"password"必须是一个不允许为空的字符串');
		}

		const userDataExample = await usersDB.findOne({ where: { user } });
		if (!userDataExample) {
			return reject(`找不到ID为${user}用户`);
		}

		/** 更新 */
		try {
			password = password ? sha1(pwdKey, password) : undefined;
			await usersDB.update({ password }, { where: { user } });
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
