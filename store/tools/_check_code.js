
const checkCode = require('../../function/check_code');

/** @type {String} 标识 */
module.exports.mark = 'core/checkCode';

/** @type {String} 说明 */
module.exports.description = '检查代码';

/** @type {Function} 控制器方法 */
module.exports.controller_method = checkCode;