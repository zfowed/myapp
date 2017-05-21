
const sha1 = require('../../function/sha1');

/** @type {String} 标识 */
module.exports.mark = 'core/sha1';

/** @type {String} 说明 */
module.exports.description = 'sha1加密';

/** @type {Function} 控制器方法 */
module.exports.controller_method = sha1;