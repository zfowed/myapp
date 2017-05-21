

const fs = require("fs");
const fse = require('fs-extra')
const path = require("path");
const async = require("async");
const archiver = require("./archiver");



class Explorer {
	constructor (rootPath) {
		/** @type {String} 根路径 */
		this.rootPath = path.join(__dirname, '../', rootPath);
	}

	/**
	 * 格式化路径
	 * @param  {String} src 需要格式化的路径
	 * @return {String}     已经格式化的路径
	 */
	path (src) {
		return new Promise((resolve, reject) => {
			if (typeof src !== 'string' || src === '') { return reject('路径不允许为空！'); }
			if (!src.startsWith(this.rootPath)) {
				src = path.join(this.rootPath, src);
				if (!src.startsWith(this.rootPath)) { return reject('路径有误！'); }
			}
			return resolve(src);
		});
	}

	/**
	 * 文件是否存在
	 * @param  {String}  src 需要格式化的路径
	 * @return {Boolean}     已经格式化的路径
	 */
	exists (src, local) {
		return new Promise(async (resolve, reject) => {

			if (!local) {
				try {
					src = await this.path(src);
				} catch (err) {
					return resolve(false);
				}
			}
			return fs.exists(src, exists => {
				return resolve(exists);
			});
		});
	}

	/**
	 * 文件(文件夹)的属性
	 * @param  {String} src 文件(文件夹)路径
	 * @return {Object}     文件(文件夹)属性
	 */
	stat (src) {
		return new Promise(async (resolve, reject) => {

			try {
				src = await this.path(src);
			} catch (err) {
				return reject(err);
			}

			fs.exists(src, exists => {
				if (!exists) { return reject('文件不存在或者没有权限！'); }

				fs.stat(src, (err, stats) => {
					if (err) { return reject('文件不存在或者没有权限！'); }
					const resolvePath = path.relative(this.rootPath, src);
					const stat = {
						resolve: resolvePath,
						dirname: path.dirname(resolvePath),
						basename: path.basename(resolvePath),
						extname: path.extname(resolvePath),
						size: stats.size,
						isFile: stats.isFile(),
						isDirectory: stats.isDirectory(),
					};
					Object.defineProperty(stat, '_resolve', {
						value: src,
						writable: false,
						configurable: false,
						enumerable: false
					});
					return resolve(stat);
				});

			});

		});
	}

	/**
	 * 文件夹下的文件列表
	 * @param  {String} src 文件夹路径
	 * @return {Array}     文件列表
	 */
	readdir (src) {
		return new Promise(async (resolve, reject) => {
			try {
				const stat = await this.stat(src);
				if (!stat.isDirectory) { throw new Error('文件夹不存在或者没有权限！'); }
				fs.readdir(stat._resolve, (err, files) => {
					if (err) { throw new Error('文件夹不存在或者没有权限！'); }

					async.parallel(files.map(item=>{
						return callback => {
							return this.stat(path.join(stat._resolve, item)).then(stat => {
								return callback(null, stat);
							}, err => {
								return callback(err);
							});
						};
					}), (err, files) => {
						if (err) { throw new Error(err); }

						let dirList = [];
						let fileList = [];


						for (var i = 0; i < files.length; i++) {
							const file = files[i]
							if (file.isDirectory) {
								dirList.push(file);
							} else {
								fileList.push(file);
							}
						}


						return resolve(dirList.concat(fileList));
					});
				})
			} catch (err) {
				return reject(err);
			}
		});
	}

	/**
	 * 删除文件(文件夹)
	 * @param  {String}  src 文件(文件夹)路径
	 * @return {Boolean}     true
	 */
	remove (src) {
		return new Promise(async (resolve, reject) => {
			try {
				const srcPath = await this.path(src);
				const exists = await this.exists(srcPath, true);
				if (!exists) { return reject('文件不存在！'); }
				await fse.remove(srcPath);
				return resolve(true);
			} catch (err) {
				return reject('删除失败！');
			}
		});
	}

	/**
	 * 移动文件(文件夹)的路径
	 * @param  {String}  src  文件(文件夹)路径
	 * @param  {String}  dest 将移动到的路径
	 * @return {Boolean}      true
	 */
	move (src, dest, local) {
		return new Promise(async (resolve, reject) => {
			try {
				const srcPath = local ? src : await this.path(src);
				const destPath = await this.path(dest);


				const srcExists = await this.exists(srcPath, true);
				if (!srcExists) { return reject('源文件不存在！'); }

				const destExists = await this.exists(destPath, true);
				if (destExists) { return reject('目标文件已经存在！'); }

				await fse.move(srcPath, destPath);
				return resolve(true);
			} catch (err) {
				return reject('移动失败！');
			}
		});
	}


	/**
	 * 复制文件(文件夹)的路径
	 * @param  {String}  src  文件(文件夹)路径
	 * @param  {String}  dest 将复制到的路径
	 * @return {Boolean}      true
	 */
	copy (src, dest, local) {
		return new Promise(async (resolve, reject) => {
			try {
				const srcPath = local ? src : await this.path(src);
				const destPath = await this.path(dest);

				const srcExists = await this.exists(srcPath, true);
				if (!srcExists) { return reject('源文件不存在！'); }

				const destExists = await this.exists(destPath, true);
				if (destExists) { return reject('目标文件已经存在！'); }

				await fse.copy(srcPath, destPath);
				return resolve(true);
			} catch (err) {
				return reject('复制失败！');
			}
		});
	}

	/**
	 * 确保目录存在。 如果目录结构不存在，则创建它。 像mkdir -p。
	 * @param  {String}  src  将创建的文件夹路径
	 * @return {Boolean}      true
	 */
	mkdir (src) {
		return new Promise(async (resolve, reject) => {
			try {
				const srcPath = await this.path(src);

				const exists = await this.exists(srcPath, true);
				if (exists) { return reject('文件夹已经存在！'); }

				await fse.ensureDir(srcPath);
				return resolve(true);
			} catch (err) {
				return reject(`${err}`);
			}
		});
	}

	/**
	 * 与writeFile几乎相同（即覆盖）
	 * @param  {String}  file 文件路径
	 * @param  {String}  data 文件数据
	 * @return {Boolean}      true
	 */
	outputFile (file, data) {
		return new Promise(async (resolve, reject) => {
			if (typeof data !== 'string') { return reject('"data"必须是字符串！'); }
			try {
				const filePath = await this.path(file);
				await fse.outputFile(filePath, data);
				return resolve(data);
			} catch (err) {
				return reject(`${err}`);
			}
		});
	}

	/**
	 * 读取文件
	 * @param  {String}  src  文件路径
	 * @return {Boolean}      true
	 */
	readFile (src) {
		return new Promise(async (resolve, reject) => {
			try {
				const fileStat = await this.stat(src);
				if (!fileStat.isFile) { throw new Error('文件不存在或者没有权限！'); }
				fs.readFile(fileStat._resolve, "utf-8", (err, data) =>{
					if (err) { throw new Error('文件不存在或者没有权限！'); }
					return resolve(data);
				});
			} catch (err) {
				return reject(`${err}`);
			}
		});
	}

	/**
	 * 压缩
	 * @param  {String}  path    工作路径
	 * @param  {String}  dest    压缩文件名
	 * @param  {String}  srcList 需要压缩的文件的文件名
	 * @return {Boolean}         true
	 */
	zipEncrypt (path, dest, srcList) {
		return new Promise(async (resolve, reject) => {
			try {

				const option = {
					format: 'zip',
					level: 9,
					path: await this.path(path),
				};

				await archiver.encrypt(`${dest}.zip`, srcList, option);
				return resolve(true);
			} catch (err) {
				return reject(`${err}`);
			}
		});
	}

	/**
	 * 解压
	 * @param  {String}  src    解压的ZIP文件路径
	 * @return {Boolean}        true
	 */
	zipDecrypt (src) {
		return new Promise(async (resolve, reject) => {
			try {

				src = await this.path(src);

				const extname = path.extname(src);
				if (extname !== '.zip') {
					return reject('解压错误');
				}

				const dirname = path.dirname(src);
				const basename = path.basename(src, '.zip');
				const dest = path.join(dirname, basename);

				const destExists = await this.exists(dest, true);
				if (destExists) { return reject(`${dest} 文件夹已经存在！`); }

				await fse.ensureDir(dest);


				await archiver.decrypt(src, dest);
				return resolve(true);
			} catch (err) {
				return reject(`${err}`);
			}
		});
	}

}

module.exports = Explorer