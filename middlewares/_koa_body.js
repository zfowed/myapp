const fs = require('fs');
const path = require('path');

var buddy = require('co-body');
var forms = require('formidable');

const schedule = require('node-schedule');


const { getPath, config } = require('../store/index');

const uploadDir = getPath(config.get('body_upload.upload_dir').value());
const scheduleTime = config.get('body_upload.schedule_time').value();
const fileAge = config.get('body_upload.files_age').value();



const buddyOpts = {
	patchNode: false,
	patchKoa: true,
	multipart: false,
	urlencoded: true,
	json: true,
	text: true,
	encoding: 'utf-8',
	jsonLimit: '1mb',
	formLimit: '56kb',
	formidable: {},
	textLimit: '56kb',
	strict: true,
};

const formsOpts = {
	uploadDir: uploadDir,
};






const getCoBody = function (ctx) {
	return new Promise(function (resolve, reject) {
		if (!buddyOpts.strict || ["GET", "HEAD", "DELETE"].indexOf(ctx.method.toUpperCase()) === -1) {
			let bodyPromise;
			try {
				if (buddyOpts.json && ctx.is('json')) {
					bodyPromise = buddy.json(ctx, {
						encoding: buddyOpts.encoding,
						limit: buddyOpts.jsonLimit
					});
				} else if (buddyOpts.urlencoded && ctx.is('urlencoded')) {
					bodyPromise = buddy.form(ctx, {
						encoding: buddyOpts.encoding,
						limit: buddyOpts.formLimit
					});
				} else if (buddyOpts.text && ctx.is('text')) {
					bodyPromise = buddy.text(ctx, {
						encoding: buddyOpts.encoding,
						limit: buddyOpts.textLimit
					});
				}

				return resolve(bodyPromise);
			} catch (err) {
				return resolve({});
			}
		}
		return resolve({});
	});
};

const getFormidable = function (ctx) {
	return async function (isProcessFile) {

		if (!ctx.is('multipart/form-data')) {
			return { fields: {}, files: {} };
		}
		return new Promise(function (resolve, reject) {
			let fields = {}, files = {};

			const form = new forms.IncomingForm(formsOpts);

			form.on('field', function(field, value) {
				if (fields[field]) {
					if (Array.isArray(fields[field])) {
						fields[field].push(value);
					} else {
						fields[field] = [fields[field], value];
					}
				} else {
					fields[field] = value;
				}
			}).on('fileBegin', function(name, file) {
				if (!file.name) { file.path = path.join(uploadDir, 'not_file'); }
			}).on('file', function(field, file) {
				if (file.name === '' && file.size === 0) { return files[field] = null; }
				if (files[field]) {
					if (Array.isArray(files[field])) {
						files[field].push(file);
					} else {
						files[field] = [files[field], file];
					}
				} else {
					files[field] = file;
				}
			}).on('error', function(err) {
				return resolve({ fields: {}, files: {} });
			}).on('end', function() {
				return resolve({ fields, files });
			});


			form.onPart = function(part) {
				if (!part.filename) {
					form.handlePart(part);
				} else if (isProcessFile) {
					form.handlePart(part);
				}
			}

			form.parse(ctx.req);
		});
	};
};




module.exports = function(app) {
	return app.use(async function (ctx, next) {

		ctx.request.body = await getCoBody(ctx);
		ctx.request.getFormidable = await getFormidable(ctx);

		return next();

	});
};






/** 定时删除上传的文件 */
schedule.scheduleJob(scheduleTime, function () {

	const files = fs.readdirSync(uploadDir);
	const now_date = new Date();

	for ( let item of files ) {

		const filePath = path.join(uploadDir, item);
		const stat = fs.statSync(filePath);
		const birthtime = stat.birthtime;

		if (now_date - birthtime > fileAge) {
			fs.unlinkSync(filePath);
		}

	}

});
