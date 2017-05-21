
/** @type {Object} 状态管理 */
const store = require('../index');


/** 输出 */
store.config = require('./config/index');
Object.assign(store.database_core, require('./core/index'));
Object.assign(store.database_app, require('./app/index'));

