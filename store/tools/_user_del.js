const { database_core: { users: usersDB } } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/user/del';

/** @type {String} 说明 */
module.exports.description = '删除用户';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id) {
	return new Promise(async (resolve, reject) => {

		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		}

		// 删除
		try {
			await usersDB.destroy({ where: { id } });
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
