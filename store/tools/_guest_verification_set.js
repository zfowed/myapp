
const { config } = require('../index');

const guestRole = config.get('user.guest.role');

/** @type {String} 标识 */
module.exports.mark = 'core/guest/verification/set';

/** @type {String} 说明 */
module.exports.description = '修改来宾用户的验证模式';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (parameters) {
	return new Promise(async (resolve, reject) => {

		if (typeof parameters !== 'object') {
			return reject('"parameters"必须是一个对象');
		}


		/** @type {Boolean} verification_route_bypass   验证路由是否开启绕行模式 */
		/** @type {Array}   verification_route          验证路由是否访问 */
		/** @type {Boolean} verification_api_bypass     验证API是否开启绕行模式 */
		/** @type {Array}   verification_api            验证API是否访问 */
		const { verification_route_bypass, verification_route, verification_api_bypass, verification_api } = parameters;

		/** 检查参数是否合法 */
		if (typeof verification_route_bypass !== 'boolean') {
			return reject('"verification_route_bypass"必须是一个布尔值');
		} else if (!Array.isArray(verification_route)) {
			return reject('"verification_route"必须是一个包含字符串的数组');
		} else if (typeof verification_api_bypass !== 'boolean') {
			return reject('"verification_api_bypass"必须是一个布尔值');
		} else if (!Array.isArray(verification_api)) {
			return reject('"verification_api"必须是一个包含字符串的数组');
		}

		/** 过滤数组 */
		for ( let item of verification_route) {
			if (typeof item !== 'string' || item === '') {
				return reject('"verification_route"必须是一个包含不为空的字符串的数组');
			}
		}
		for ( let item of verification_api) {
			if (typeof item !== 'string' || item === '') {
				return reject('"verification_api"必须是一个包含不为空的字符串的数组');
			}
		}



		await guestRole
			.set('verification_route_bypass', verification_route_bypass)
			.set('verification_route', verification_route)
			.set('verification_api_bypass', verification_api_bypass)
			.set('verification_api', verification_api)
			.write();


		return resolve();

	});
};





