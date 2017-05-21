
const sha1 = require('../../function/sha1');
const { config } = require('../index');

const pwdKey = config.get('user.pwd_sha1_key').value();

/** @type {String} 标识 */
module.exports.mark = 'core/sroot/password';

/** @type {String} 说明 */
module.exports.description = '修改超级管理员密码';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (password) {
	return new Promise(async (resolve, reject) => {

		/** 检查参数是否合法 */
		if (typeof password !== 'string' || password === '') {
			return reject('"password"必须是一个不允许为空的字符串');
		}

		password = sha1(pwdKey, password);

		await config.set('user.sroot.password', password).write();

		return resolve();

	});
};

