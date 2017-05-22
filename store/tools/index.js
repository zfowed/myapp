const fs = require('fs');
const path = require('path');

const { str2fun } = require('../../function/function_conversion');
const { database_core: { tools: toolsDB }, tools_examples } = require('../index');



/** 遍历所有工具实例并存储到${tools_examples} */
const files = fs.readdirSync(__dirname);
for ( let file of files ) {
	if (file.startsWith('_') && path.extname(file) === '.js') {
		const file_path = path.join(__dirname, path.basename(file, '.js'));
		let readme = '';
		if (fs.existsSync(`${file_path}.md`)) {
			readme = fs.readFileSync(`${file_path}.md`, "utf-8");
		}
		const { mark, description, controller_method } = require(file_path);

		if (typeof mark !== 'string' || mark === '') {
			throw new Error(`"mark"必须是一个不允许为空的字符串 (${file_path})`);
		} else if (typeof description !== 'string' || description === '') {
			throw new Error(`"description"必须是一个不允许为空的字符串 (${file_path})`);
		} else if (typeof controller_method !== 'function') {
			throw new Error(`"controller_method"必须是一个Function (${file_path})`);
		}

		tools_examples[mark] = { mark, description, controller_method, readme, file_path };
	}
}


/**
 * 初始化数据库的工具实例
 * 暂时没有什么好的办法监听数据库什么时候准备完成
 * 先用setTimeout顶着先
 */
setTimeout(()=>{
	toolsDB.findAll().then(async function (toolDataExamples) {
		toolData = toolDataExamples.map(item=>item.get());
		for ( const item of toolData ) {
			const { mark, controller_code } = item;
			const controller_method = await str2fun(controller_code);
			tools_examples[mark] = Object.assign({controller_method}, item);
		}
	})
}, 5000)