const fs = require('fs');
const path = require('path');
const unzip = require("unzip");
const archiver = require('archiver');


//压缩
async function encrypt(dest, srcList, option) {
	return new Promise(async (resolve, reject) => {
		option = option || {};

		/** 检查参数是否合法 */
		if (!Array.isArray(srcList)) {
			return reject('"srcList"必须是一个包含文件路径的数组');
		} else if (typeof dest !== 'string' || dest === '') {
			return reject('"dest"必须是一个文件路径');
		} else if (typeof option !== 'object') {
			return reject('"option"必须是一个对象');
		}

		option = Object.assign({
			format: 'zip',
			level: 9,
			path: '/',
		}, option);

		dest = path.join(option.path, dest);

		fs.exists(dest, exists => {
			if (exists) { return reject('压缩文件已经存在！'); }
			Promise.all(srcList.map(item=>{
				return new Promise(async (resolve, reject) => {
					if (typeof item !== 'string') {
						return reject('"srcList"必须是一个包含不为空的字符串的数组！');
					}
					const resolvePath = path.join(option.path, item);
					fs.exists(resolvePath, exists => {
						if (!exists) { return reject(`压缩失败！`); }
						fs.stat(resolvePath, (err, stats) => {
							if (err) { return reject(`压缩失败！`); }
							return resolve({
								resolve: resolvePath,
								name: item,
								isFile: stats.isFile(),
								isDirectory: stats.isDirectory(),
							});
						});
					});
				});
			})).then(res=>{

				var output = fs.createWriteStream(dest);
				var archive = archiver(option.format, {
					zlib: {
						level: option.level   // 设置压缩级别。
					}
				});

				// 监听要写入的所有归档数据
				output.on('close', function() {
					return resolve();
				});

				// 很好的做法明确地捕捉这个错误
				archive.on('error', function(err) {
					return reject('压缩失败');
				});

				for (var i = 0; i < res.length; i++) {
					const item = res[i];
					if (item.isFile) {
						archive.file(item.resolve, {
							name: item.name,
						});
					} else if (item.isDirectory) {
						archive.directory(item.resolve, item.name);
					}
				}

				archive.pipe(output);
				archive.finalize();
			}, err=>{
				return reject(err);
			});
		});

	});
}

//解压
async function decrypt(src, dest) {
	return new Promise(async (resolve, reject) => {
		/** 检查参数是否合法 */
		if (typeof src !== 'string' || src === '') {
			return reject('"src"必须是一个文件路径');
		} else if (typeof dest !== 'string' || dest === '') {
			return reject('"dest"必须是一个文件路径');
		}

		fs.exists(src, exists => {
			if (!exists) { return reject('解压失败！'); }
			fs.exists(dest, exists => {
				if (!exists) { return reject('解压失败！'); }
				fs.stat(src, (err, stats) => {
					if (!stats.isFile()) { return reject('解压失败！'); }
					fs.stat(dest, (err, stats) => {
						if (!stats.isDirectory()) { return reject('解压失败'); }
						fs.createReadStream(src).pipe(unzip.Extract({ path: dest })).on('error', err => {
							return reject('解压失败');
						}).on('finish', () => {
							return resolve();
						});
					});
				});
			});
		});

	});
};


module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;