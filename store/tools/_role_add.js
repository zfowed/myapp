
const { database_core: { roles: rolesDB } } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/role/add';

/** @type {String} 说明 */
module.exports.description = '添加用户角色';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (parameters) {
	return new Promise(async (resolve, reject) => {

		if (typeof parameters !== 'object') {
			return reject('"parameters"必须是一个对象');
		}

		/** @type {String}  name                        角色昵称 */
		/** @type {Boolean} verification_route_bypass   验证路由是否开启绕行模式 */
		/** @type {Array}   verification_route          验证路由是否可以访问 */
		/** @type {Boolean} verification_api_bypass     验证API是否开启绕行模式 */
		/** @type {Array}   verification_api            验证API是否可以访问 */
		/** @type {String}  description                 说明 */
		let { name, verification_route_bypass, verification_route, verification_api_bypass, verification_api, description } = parameters;

		/** 检查参数是否合法 */
		if (typeof name !== 'string' || name === '') {
			return reject('"name"必须是一个不允许为空的字符串');
		} else if (typeof verification_route_bypass !== 'boolean') {
			return reject('"verification_route_bypass"必须是一个布尔值');
		} else if (!Array.isArray(verification_route)) {
			return reject('"verification_route"必须是一个包含字符串的数组');
		} else if (typeof verification_api_bypass !== 'boolean') {
			return reject('"verification_api_bypass"必须是一个布尔值');
		} else if (!Array.isArray(verification_api)) {
			return reject('"verification_api"必须是一个包含字符串的数组');
		} else if (typeof description !== 'string' || description === '') {
			return reject('"description"必须是一个不允许为空的字符串');
		} else if (name === 'Sroots' || name === 'Guests') {
			return reject(`已经存在${name}用户角色了`);
		}


		/** 过滤数组 */
		for ( let item of verification_route) {
			if (typeof item !== 'string' || item === '') {
				return reject('"verification_route"必须是一个包含不为空的字符串的数组');
			}
		}
		for ( let item of verification_api) {
			if (typeof item !== 'string' || item === '') {
				return reject('"verification_route"必须是一个包含不为空的字符串的数组');
			}
		}


		const roleDataExample = await rolesDB.findOne({ where: { name } });
		if (roleDataExample) {
			return reject(`已经存在${name}用户角色了`);
		}


		/** 添加 */
		try {
			verification_route = JSON.stringify(verification_route);
			verification_api = JSON.stringify(verification_api);
			await rolesDB.create({ name, verification_route_bypass, verification_route, verification_api_bypass, verification_api, description });
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};
