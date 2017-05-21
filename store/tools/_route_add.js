const { newFun, funParse } = require('../../function/function_conversion');
const { database_core: { routes: routesDB }, routes_examples, router } = require('../index');

/** @type {String} 标识 */
module.exports.mark = 'core/route/add';

/** @type {String} 说明 */
module.exports.description = '添加路由';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (parameters) {
	return new Promise(async (resolve, reject) => {

		if (typeof parameters !== 'object') {
			return reject('"parameters"必须是一个对象');
		}

		/** @type {String} uri                   URI */
		/** @type {String} method                方法 */
		/** @type {String} description           说明 */
		/** @type {String} controller_code       控制器代码 */
		const { uri, method, description, controller_code } = parameters;

		/** 检查参数是否合法 */
		if (typeof uri !== 'string' || uri === '') {
			return reject('"uri"必须是一个不允许为空的字符串');
		} else if (typeof method !== 'string' || method === '' || !['get', 'post'].includes(method)) {
			return reject('"method"必须是get或者post');
		} else if (typeof description !== 'string' || description === '') {
			return reject('"description"必须是一个不允许为空的字符串');
		} else if (typeof controller_code !== 'string' || controller_code === '') {
			return reject('"controller_code"必须是一个不允许为空的字符串');
		}


		/** 生成控制器方法 */
		let controller_method;
		try {
			/** 检查控制器参数 */
			const controllerParse = await funParse(controller_code);
			if (!controllerParse.isAsync) {
				return reject('控制器Function必须是AsyncFunction');
			} else if (controllerParse.parameters.join(',') !== 'ctx,next') {
				return reject('控制器Function的参数必须是(ctx, next)');
			}
			controller_method = await newFun(controllerParse.parameters, controllerParse.body, true);
		} catch (err) {
			return reject(`${err}`);
		}


		/** 添加 */
		try {
			routeDBDataExamples = await routesDB.create({ uri, method, description, controller_code });
			routeDBData = routeDBDataExamples.get();
			routes_examples.push(Object.assign({controller_method}, routeDBData));
			router[method](`app-${routeDBData.id}`, uri, controller_method);
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}


		return resolve();
	});
};
