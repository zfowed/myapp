
### 更新API

#### 标识

`core/api/update`

#### 请求参数

| KEY             | 类型    | 描述               |
| --------------- | ------- | ------------------ |
| id              | Number  | ID                 |
| mark            | String  | 标识               |
| verification    | Number  | 验证模式           |
| multipart_file  | Boolean | 是否开启上传文件   |
| description     | String  | 说明               |
| controller_code | String  | 控制器代码         |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "更新成功！",
	"data": {}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/api/update",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		id: 1,
		mark: 'test',
		verification: 0,
		multipart_file: false,
		description: '这是一个测试的API',
		controller_code: 'async function api (params, files, ctx, statusFun) { return statusFun(); }'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/api/update` 工具说明文档