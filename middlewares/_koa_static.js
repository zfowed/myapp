const fs = require('fs');
const path = require('path');
const koaStatic = require('koa-static');
const schedule = require('node-schedule');

const { getPath, config } = require('../store/index');


const publicDir = getPath(config.get('static_service.path').value());
const tempDir = getPath(config.get('static_service.temp_path').value());
const option = config.get('static_service.option').value();
const scheduleTime = config.get('static_service.schedule_time').value();
const fileAge = config.get('static_service.files_age').value();



module.exports = function (app) {
	return app.use(koaStatic(publicDir, config.get('static_service.option').value()))
};

/** 定时删除临时静态的文件 */
schedule.scheduleJob(scheduleTime, function () {

	const exists = fs.existsSync(tempDir);
	if (!exists) { return ; }
	
	const files = fs.readdirSync(tempDir);
	const now_date = new Date();

	for ( let item of files ) {

		const filePath = path.join(tempDir, item);
		const stat = fs.statSync(filePath);
		const birthtime = stat.birthtime;

		if (now_date - birthtime > fileAge) {
			fs.unlinkSync(filePath);
		}

	}

});