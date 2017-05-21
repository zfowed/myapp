const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

const checkCode = require('./check_code');

/** @type {RegExp} Function字符串正则表达式 */
const regular_function = /^[\s\n]*?(?:(async)\ +?)?function(?:\ +?([_$a-zA-Z][_$a-zA-Z0-9]*?))?\ *?\((\ *?[_$a-zA-Z][_$a-zA-Z0-9]*?\ *?(?:,\ *?[_$a-zA-Z][_$a-zA-Z0-9]*?\ *?)*?)?\)\ *?{([\s\S]*?)\}[\s\n]*?$/;
/** @type {RegExp} 变量正则表达式 */
const regular_parameter = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;



/**
 * 将字符串两边多余的空格去掉
 * @param  {String} 字符串 需要处理的字符串
 * @return {String}        处理好的字符串
 */
const trim = function (string) {
	return string.replace(/(^\s*)|(\s*$)/g, "");
}



/**
 * 解析Function字符串
 * @param  {String} functionString 需要解析的Function字符串
 * @return {Object}                解析的Function字符串后的对象
 */
const funParse = async function (functionString) {
	return new Promise(async (resolve, reject) => {
		if (typeof functionString !== 'string' || functionString === '') {
			return reject('"functionString"必须是一个不允许为空的字符串');
		} else if (!regular_function.test(functionString)) {
			return reject('"functionString"必须是一个可以生成Function的字符串');
		}

		let res = {};
		functionString.replace(regular_function, function (all, isAsync, name, parameters, body) {
			res.isAsync = isAsync ? true : false;
			res.name = name;
			res.parameters = parameters ? parameters.split(',').map(item => trim(item)) : [];
			res.body = body;
		});
		return resolve(res);
	});
}

/**
 * 生成Function字符串
 * @param  {Boolean} isAsync    是否AsyncFunction
 * @param  {String}  name       Function名称
 * @param  {Array}   parameters Function参数
 * @param  {String}  body       Function内容
 * @return {String}             Function字符串
 */
const funStringify = async function (isAsync, name, parameters, body) {
	return new Promise(async (resolve, reject) => {

		if (isAsync && typeof isAsync !== 'boolean') {
			return reject('"isAsync"必须是一个Boolean');
		} else if (name && (typeof name !== 'string' || !regular_parameter.test(name))) {
			return reject('"name"必须是一个合法的Function名称');
		} else if (!Array.isArray(parameters)) {
			return reject('"parameters"必须是一个数组');
		} else if (typeof body !== 'string' || body === '') {
			return reject('"body"必须是一个不允许为空的字符串');
		}

		const asyncString = isAsync ? 'async ' : '';
		const nameString = name ? `${name} ` : '';
		const parametersString = parameters.join(', ');
		const functionString = `${asyncString}function ${nameString}(${parametersString}) {${body}}`;
		return resolve(functionString);

	});
};



/**
 * 生成 Function
 * @param  {Array}    parameters Function参数
 * @param  {String}   body       Function名称
 * @param  {Boolean}  isAsync    是否AsyncFunction
 * @return {Function}            新的Function
 */
const newFun = async function (parameters, body, isAsync) {
	return new Promise(async (resolve, reject) => {
		try {
			const functionString = await funStringify(isAsync, 'anonymous', parameters, body);
			const checkCodeRes = await checkCode(functionString);
			if (checkCodeRes.length) { return reject('Function代码不规范或者不是JavaScript代码'); }
			if (isAsync) { return resolve(new AsyncFunction(...parameters, body)); }
			return resolve(new Function(...parameters, body));
		} catch (err) {
			return reject(`${err}`);
		}

	});
};


/**
 * 生成 Function
 * @param  {String}   functionString 需要解析的Function字符串
 * @return {Function}                新的Function
 */
const str2fun = async function (functionString) {
	return new Promise(async (resolve, reject) => {
		try {
			const analysis = await funParse(functionString);
			const { isAsync, name, parameters, body } = analysis;
			const controller = await newFun(parameters, body, isAsync);
			return resolve(controller);
		} catch (err) {
			return reject('"functionString"必须是一个合法的Function字符串');
		}

	});
};



module.exports.funParse = funParse;
module.exports.funStringify = funStringify;
module.exports.newFun = newFun;
module.exports.str2fun = str2fun;

