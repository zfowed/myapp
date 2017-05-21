const { newFun, funParse } = require('../../function/function_conversion');
const { database_core: { apis: apisDB }, apis_examples } = require('../index');


/** @type {String} 标识 */
module.exports.mark = 'core/api/update';

/** @type {String} 说明 */
module.exports.description = '更新API';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (id, parameters) {
	return new Promise(async (resolve, reject) => {

		if (typeof parameters !== 'object') {
			return reject('"parameters"必须是一个对象');
		}

		/** @type {String}  mark                  标识 */
		/** @type {String}  verification          验证模式 */
		/** @type {Boolean} multipart_file        是否开启上传文件 */
		/** @type {String}  description           说明 */
		/** @type {String}  controller_code       控制器代码 */
		const { mark, verification, multipart_file, description, controller_code } = parameters;


		/** 检查参数是否合法 */
		if (typeof id !== 'number' || id < 1) {
			return reject('"id"必须是一个合法的ID');
		} else if (typeof mark !== 'string' || mark === '') {
			return reject('"mark"必须是一个不允许为空的字符串');
		} else if (!Number.isInteger(verification) || verification < 0 || verification > 3) {
			return reject('"verification"必须是一个[0-3]的数值');
		} else if (typeof multipart_file !== 'boolean') {
			return reject('"multipart_file"必须是一个布尔值');
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
			} else if (controllerParse.parameters.join(',') !== 'params,files,ctx,statusFun') {
				return reject('控制器Function的参数必须是(params, files, ctx, statusFun)');
			}
			controller_method = await newFun(controllerParse.parameters, controllerParse.body, true);
		} catch (err) {
			return reject(`${err}`);
		}

		/** 查找API实例 */
		const examples = Object.values(apis_examples).find(item=>item.id===id)
		if (!examples) {
			return reject('找不到ID为${id}的API实例');
		}

		// 更新
		try {
			await apisDB.update({ mark, verification, multipart_file, description, controller_code }, { where: { id }  });
			Object.assign(examples, { mark, verification, multipart_file, description, controller_code, controller_method, updated_at: new Date() } );
		} catch (err) {
			return reject(`数据库劫持：${err}`.split('\n')[0]);
		}

		return resolve();
	});
};