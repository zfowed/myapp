
### 静态文件管理

#### 标识

`core/vaiews/explorer`

#### 请求参数

| KEY      | 类型   | 描述 |
| -------- | ------ | ---------------------- |
| method   | String | 处理文件的方法标识     |
| src      | String | 需要处理文件的路径     |
| srcList  | Array  | 需要批量处理文件的路径 |
| dest     | String | 目标路径               |


#### 例子

```javascript

// 列出文件夹里的文件(readdir)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'readdir',
		src: '/'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});


// 创建文件夹(mkdir)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'mkdir',
		src: '/dir'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});

// 删除文件/文件夹(remove)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'remove',
		src: '/dir'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});

//复制文件/文件夹(copy)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'copy',
		src: '/dirSrc',
		dest '/dirDest'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});


//重命名/移动文件/文件夹(move)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'move',
		src: '/dirSrc',
		dest '/dirDest'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});

// 压缩文件/文件夹到当前目录(zipEncrypt)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'zipEncrypt',
		path: '/dirSrc',
		srcList: ['dirSrc1', 'dirSrc2', 'dirSrc3', 'fileSrc1'],
		dest 'filename'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});

// 解压ZIP文件到当前目录同名的文件夹(zipDecrypt)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'zipDecrypt',
		src: '/fileSrc',
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});

// 下载文件(download)
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/vaiews/explorer",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		method: 'download',
		src: '/fileSrc',
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});

```

> 更多请查看 `core/vaiews/explorer` 工具说明文档
