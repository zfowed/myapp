
const sha1 = require('../../function/sha1');
const { config, database_core: { users: usersDB, roles: rolesDB } } = require('../index');

const pwdKey = config.get('user.pwd_sha1_key').value();

/** @type {String} 标识 */
module.exports.mark = 'core/user/check';

/** @type {String} 说明 */
module.exports.description = '校验用户账号密码';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (user, password) {
	/** 检查参数是否合法 */
	if (typeof user !== 'string' || user === '') {
		return null;
	} else if (typeof password !== 'string' || password === '') {
		return null;
	}

	password = sha1(pwdKey, password);

	const userDataExample = await usersDB.findOne({
		where: { user, password },
		include: { model: rolesDB }
	});

	if (!userDataExample) {
		return null;
	}

	const userData = userDataExample.get();
	userData.password = null;
	userData.role = userData.role.get();
	userData.role.verification_route = JSON.parse(userData.role.verification_route);
	userData.role.verification_api = JSON.parse(userData.role.verification_api);

	return userData;
};
