
### 上传文件转移到静态文件文件夹（*不能直接调用此工具方法*）

#### 标识

`core/views/to`

> await tool(params, files, ctx, statusFun);

> *不能直接调用此工具方法*，此工具方法是配合 `core/upload` API接口使用的


#### 例子

##### 浏览器端

```html
<form id="uploadForm" enctype="multipart/form-data">
	<p>上传文件到静态文件夹</p>
	<p>中转工具方法标识: <input type="text" name="tool" value="core/views/to" /></p>
	<p>静态文件夹的相对路径: <input type="text" name="src" value="/dir" /></p>
	<p>选择文件: <input type="file" name="file" /></p>
	<input type ="submit" value="上传"/>
</form>
```

```javascript
const formData = new FormData($("#uploadForm")[0]);
$.ajax({
	type: "post",
	url: "http://localhost:3000/api/core/upload",
	dataType: "json",
	data: formData,
	contentType: false,
	processData: false,
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

#### `core/upload` API接口部分源码

```
async function (params, files, ctx, statusFun) {

	try {
		const { tool: toolMark } = params;
		const tool = ctx.getTool(toolMark);
		if (tool) {
			return await tool(params, files, ctx, statusFun);
		}
		return statusFun(404, `这找不到${toolMark}`);
	} catch (err) {
		return statusFun(412, `${err}`);
	}

	return statusFun();

}
```

#### `core/views/to` 工具方法部分源码

```javascript
async function (params, files, ctx, statusFun) {
	return new Promise(async (resolve, reject) => {

		const { src } = params;
		const { file } = files;


		/** 检查参数是否合法 */
		if (typeof src !== 'string' || src === '') {
			return reject(statusFun('"src"必须是一个不允许为空的字符串'));
		} else if (typeof file !== 'object' && file.path) {
			return reject(statusFun('"file"必须是一个File'));
		}

		try {
			const explorerTool = this.getTool('core/views/explorer');
			await explorerTool('move', file.path, path.join(src, file.name), true);
			return resolve(statusFun())
		} catch (err) {
			return resolve(statusFun(412, `${err}`));
		}
	});
}
```