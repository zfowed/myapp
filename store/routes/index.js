const fs = require('fs');
const path = require('path');
const uuidV4 = require('uuid/v4');

const { str2fun } = require('../../function/function_conversion');
const { database_core: { routes: routesDB }, routes_examples, router } = require('../index');





/** 遍历所有API实例并存储到内存 */
const files = fs.readdirSync(__dirname);
for ( let file of files ) {
	if (file.startsWith('_') && path.extname(file) === '.js') {
		const file_path = path.join(__dirname, path.basename(file, '.js'));
		let readme = '';
		if (fs.existsSync(`${file_path}.md`)) {
			readme = fs.readFileSync(`${file_path}.md`, "utf-8");
		}
		const { uri, method, description, controller_method } = require(file_path);


		if (typeof uri !== 'string' || uri === '') {
			throw new Error(`"uri"必须是一个不允许为空的字符串 (${file_path})`);
		} else if (typeof description !== 'string' || description === '') {
			throw new Error(`"description"必须是一个不允许为空的字符串 (${file_path})`);
		} else if (typeof controller_method !== 'function') {
			throw new Error(`"controller_method"必须是一个Function (${file_path})`);
		}

		const core_id = uuidV4();
		router[method](`core-${core_id}`, uri, controller_method);
		routes_examples.push({ core_id, uri, method, description, controller_method, readme, file_path });

	}


}

/**
 * 初始化数据库的工具实例
 * 暂时没有什么好的办法监听数据库什么时候准备完成
 * 先用setTimeout顶着先
 */
setTimeout(()=>{
	routesDB.findAll().then(async function (routeData_examples) {
		routeData = routeData_examples.map(item=>item.get());
		for ( const item of routeData ) {
			const { id, uri, method, controller_code } = item
			const controller_method = await str2fun(controller_code);
			routes_examples.push(Object.assign({controller_method}, item));
			router[method](`app-${id}`, uri, controller_method);
		}
	})
}, 2000)

