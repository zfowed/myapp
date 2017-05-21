const path = require('path');

const crawler = require('../../function/crawler');

/** @type {String} 标识 */
module.exports.mark = 'core/crawler';

/** @type {String} 说明 */
module.exports.description = '抓取网站';

/** @type {Function} 控制器方法 */
module.exports.controller_method = crawler;
