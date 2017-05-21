
const { config } = require('../index');

const guestRole = config.get('user.guest.role');

/** @type {String} 标识 */
module.exports.mark = 'core/guest/verification';

/** @type {String} 说明 */
module.exports.description = '获取来宾用户的验证模式';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function () {
	const guestRoleData = guestRole.value();
	return {
		'verification_route_bypass': guestRoleData.verification_route_bypass,
		'verification_route': guestRoleData.verification_route,
		'verification_api_bypass': guestRoleData.verification_api_bypass,
		'verification_api': guestRoleData.verification_api,
	};
};





