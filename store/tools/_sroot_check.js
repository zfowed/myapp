
const sha1 = require('../../function/sha1');
const { config } = require('../index');

const pwdKey = config.get('user.pwd_sha1_key').value();

/** @type {String} 标识 */
module.exports.mark = 'core/sroot/check';

/** @type {String} 说明 */
module.exports.description = '校验超级管理员密码';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (password) {

	/** 检查参数是否合法 */
	if (typeof password !== 'string' || password === '') {
		return null;
	}

	const srootData = config.get('user.sroot').copy().value();

	password = sha1(pwdKey, password);



	if (password !== srootData.password) {
		return null;
	}


	srootData.password = null;
	return srootData;
};

