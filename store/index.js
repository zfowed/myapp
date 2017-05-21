const fs = require('fs');
const path = require('path');


/** @type {String} 项目根路径 */
const rootPath          = module.exports.rootPath      = path.join(__dirname, '../');

/** @type {Object} 系统配置 */
const config          = module.exports.config          = null;

/** @type {Object} app全局状态 */
const store           = module.exports.store           = null;

/** @type {Router} 路由实例 */
const app             = module.exports.app             = new require('../app');
const router          = module.exports.router          = new require('koa-router')();

/** @type {Object} 核心数据库 */
const database_core   = module.exports.database_core   = {};
/** @type {Object} 应用数据库 */
const database_app    = module.exports.database_app    = {};

/** @type {Object} 工具库实例 */
const tools_examples  = module.exports.tools_examples  = {};
/** @type {Object} 路由库实例 */
const routes_examples = module.exports.routes_examples = [];
/** @type {Object} API库实例 */
const apis_examples   = module.exports.apis_examples   = {};


/**
 * 获取API方法
 * @param  {String}  mark       标识
 * @param  {Boolean} isExamples 类型 true 获取API实例 false 获取API方法
 * @return                      返回API 没有返回 null
 */
const getApi = module.exports.getApi = function (mark = '', isExamples = false) {

	if (!apis_examples[mark]) {
		return null;
	} else if (isExamples === true) {
		return apis_examples[mark];
	} else {
		return apis_examples[mark].controller_method
	}
};

/**
 * 返回根路径开始
 * @param  {String}  _path      路径
 * @return                      返回API 没有返回 null
 */
const getPath = module.exports.getPath = function (..._path) {
	return path.join(rootPath, ..._path);
};


/**
 * 获取工具方法
 * @param  {String}  mark       标识
 * @return                      返回工具 没有返回 null
 */
const getTool = module.exports.getTool = function (mark = '') {
	if (!tools_examples[mark]) {
		return null;
	} else {
		return tools_examples[mark].controller_method.bind(toolThsi);
	}
};
const toolThsi = { getTool, getPath, db: database_app, store };

getTool.require = (function () {
	let package = {};
	const package_list = fs.readdirSync(path.join(rootPath, 'node_modules'));
	return function (mark, isNew) {
		if (isNew !== true && package[mark]) {
			return package[mark];
		}
		try {
			package[mark] = require(mark);
			return package[mark];
		} catch (err) {
			return null;
		}
	};
})();





/** 遍历所有状态 */
require('./databases/index');
require('./tools/index');
require('./routes/index');
require('./apis/index');

require('../function/Explorer')
