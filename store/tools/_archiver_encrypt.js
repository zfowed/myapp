
const archiver = require('../../function/archiver');

/** @type {String} 标识 */
module.exports.mark = 'core/archiver/encrypt';

/** @type {String} 说明 */
module.exports.description = '归档压缩';

/** @type {Function} 控制器方法 */
module.exports.controller_method = archiver.encrypt;