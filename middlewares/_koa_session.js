const uuidV4 = require('uuid/v4');
const koaSession = require('koa-session');
const pathToRegexp = require('path-to-regexp');
const aes = require('../function/aes_128_cbc');

const { config } = require('../store/index');

const sessionOpt = config.get('session').value();
const aesKey = sessionOpt.aes_key;


module.exports = function (app) {
	app.keys = ['uuidV4()'];
	// app.keys = [uuidV4()];
	app.use(koaSession(Object.assign({}, sessionOpt, {
		encode (body) {
			body = JSON.stringify(body);
			return aes.encrypt(aesKey, body);
		},
		decode (string) {
			const body = aes.decrypt(aesKey, string);
			const json = JSON.parse(body);
			return json;
		}
	}), app));
	return app.use(async function (ctx, next) {
		if (!ctx.session.identity) {
			ctx.session.identity = config.get('user.guest').value();
		}

		const url = ctx.url;
		const role_name = ctx.session.identity.role.name;
		const bypass = ctx.session.identity.role.verification_route_bypass;
		let regExpText = ctx.session.identity.role.verification_route_regexp;


		if (role_name !== 'Sroots') {

			/** 合并正则表达式 */
			if (!regExpText) {
				const { verification_route } = ctx.session.identity.role;
				const merge = verification_route.map(item=>pathToRegexp(item).source).join('|');
				regExpText = ctx.session.identity.role.verification_route_regexp = merge || '^$';
			}

			/** 验证权限路由 */
			const regExp = new RegExp(regExpText, 'i');
			if (bypass && regExp.test(url)) {
				return ctx.throw(404);
			} else if (!bypass && (regExpText === '^$' || !regExp.test(url))) {
				return ctx.throw(404);
			}
		}

		return next();
	});

};

