const linter = require('eslint').linter;


/** @type {Object} 检查代码的默认配置 */
const default_config = {
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"env": {
		"browser": false,
		"node": false,
		"es6": true,
	},
	"rules": {
		"no-alert": 2,
		"no-catch-shadow": 2,
		"no-class-assign": 2,
		"no-cond-assign": 2,
		"no-console": 2,
		"no-const-assign": 2,
		"no-control-regex": 2,
		"no-debugger": 2,
		"no-delete-var": 1,
		"no-dupe-keys": 2,
		"no-dupe-args": 2,
		"no-duplicate-case": 2,
		"no-empty": 1,
		"no-empty-character-class": 1,
		"no-eq-null": 1,
		"no-eval": 2,
		"no-ex-assign": 2,
		"no-implied-eval": 2,
		"no-invalid-regexp": 2,
		"no-self-compare": 1,
		"no-shadow-restricted-names": 2,
		"no-sparse-arrays": 2,
		"no-undef": 2,
		"no-new-func": 2,
	}
};



/**
 * 检查代码
 * @param  {String} code    代码
 * @param  {Object} config  检查配置
 * @return {Array}          错误信息
 */
module.exports = async function (code = '', config = null) {
	return new Promise(async(resolve, reject) => {

		if (typeof code !== 'string' || code === '') {
			return reject(`"code"必须是一个不允许为空的字符串`);
		} else if (config && typeof config !== 'object') {
			return reject(`"config"必须是一个对象`);
		}


		if (config) {
			config = {
				"extends": "eslint:recommended",
				"parser": "babel-eslint",
				"env": config.env,
				"rules": config.rules
			};
		}

		const messages = linter.verify(code, config || default_config);

		return resolve(messages);
	});
};