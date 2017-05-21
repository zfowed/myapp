
const url = require('url');
const path = require('path');

const marked = require('../../function/marked');

const { config, getApi } = require('../index');

const apiConfig = config.get('api').value();


const statusFun = function () {
	let code = 200, msg = 'ok', data = {};
	for ( const item of arguments ) {
		switch ( typeof item ) {
			case 'number': code = item; break;
			case 'string': msg  = item; break;
			case 'object': data = item; break;
		}
	}
	return { code, msg, data };
};



const resData = function (cb, data) {
	if (cb) {
		const callback = cb || '';
		const json = JSON.stringify(data);
		data = `${callback}(${json})`;
	}
	return data;
};


const getThrowErr = function (ctx, cb) {
	return function (code, msg) {
		if (apiConfig.prompt) {
			ctx.status = code;
			return ctx.body = resData(cb, statusFun(code, msg));
		} else {
			return ;
		}
	}
};

const getResData = function (ctx, cb) {
	return function (data) {
		return ctx.body = resData(cb, data);
	}
};


/** @type {String} 标识 */
module.exports.uri = url.resolve(path.join('/', apiConfig.uri, ':mark*'), '') || null;

/** @type {String} 方法 */
module.exports.method = 'all';

/** @type {String} 说明 */
module.exports.description = 'API统一接口';

/** @type {Function} 控制器方法 */
module.exports.controller_method = async function (ctx, next) {


	/** 跨域 */
	if (apiConfig.cross_domain) {
		const allowOrigin = apiConfig.jsonp ? 'GET,POST' : 'POST';
		ctx.set('Access-Control-Allow-Origin', Array.isArray(apiConfig.cross_domain) ? apiConfig.cross_domain : ctx.headers.origin);
		ctx.set('Access-Control-Allow-Methods', allowOrigin);
		ctx.set('Access-Control-Allow-Credentials', true);
		ctx.set('Access-Control-Allow-Headers', 'content-type');
	}


	if (ctx.method === 'OPTIONS') { return ctx.body=''; }


	/** 获取API实例 */
	const mark = ctx.params.mark;

	const apiExamples = getApi(mark, true);
	if (!apiExamples) { return ; }


	/** 整合数据 */
	const formData = { params: {}, files: {} };
	if (apiConfig.jsonp && ctx.method === 'GET') {
		Object.assign(formData.params, ctx.query);
	} else if (ctx.method === 'POST') {
		Object.assign(formData.params, ctx.request.body);
		if (ctx.is('multipart/form-data')) {
			const { fields, files } = await ctx.request.getFormidable(apiExamples.multipart_file);
			Object.assign(formData.params, fields);
			Object.assign(formData.files, files);
		}
	} else {
		return ;
	}

	/** 获取返回方法 */
	const callback = typeof formData.params.callback === 'string' ? formData.params.callback : null;
	const throwErr = getThrowErr(ctx, callback);
	const resData = getResData(ctx, callback);



	/** 验证权限 */
	const { name: role_name, verification_api, verification_api_bypass } = ctx.session.identity.role;
	if (role_name !== 'Sroots') {
		if (apiExamples.verification === 1 && role_name === 'Guests') {
			return throwErr(401, '要求身份验证');
		} else if (apiExamples.verification === 2) {
			return throwErr(401, '要求身份验证');
		} else if (apiExamples.verification === 3) {
			if (verification_api_bypass && verification_api.includes(mark)) {
				return throwErr(401, '要求身份验证');
			} else if (!verification_api_bypass && !verification_api.includes(mark)) {
				return throwErr(401, '要求身份验证');
			}
		}
	}

	// 处理API
	try {
		const data = await apiExamples.controller_method(formData.params, formData.files, ctx, statusFun);
		if (data === false) { return ; }
		if (typeof data === 'undefined') { throw new Error('API没有响应数据'); }
		return resData(data);
	} catch (err) {
		return throwErr(500, 'API内部错误');
	}

};

