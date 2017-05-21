
const { database_core: { roles: rolesDB } } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/role/list';

/** @type {String} 说明 */
module.exports.description = '获取用户角色列表';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (unit_step, page_current, option) {
	return new Promise(async (resolve, reject) => {

		/** @type {Number} unit_step = 10 单位步长 */
		if (typeof unit_step === 'undefined') {
			unit_step = 10;
		} else if (typeof unit_step !== 'number' || unit_step < 1) {
			return reject('"unit_step"必须是一个大于等于1的数字');
		}

		/** @type {Number} page_current = 1 页码 */
		if (typeof page_current === 'undefined') {
			page_current = 1;
		} else if (typeof page_current !== 'number' || page_current < 1) {
			return reject('"page_current"必须是一个大于等于1的数字');
		}

		/** @type {Object} option 选项 */
		if (option && typeof option !== 'object') {
			return reject('"option"必须是一个对象');
		}



		const resData = await rolesDB.getList(unit_step, page_current, option);
		if (resData.list_data.length) {
			resData.list_data = resData.list_data.map(item=>{
				const data = item.get();
				data.verification_route = JSON.parse(data.verification_route);
				data.verification_api = JSON.parse(data.verification_api);
				return data;
			});
		}
		return resolve(resData);
	});
};