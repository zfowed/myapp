
### 获取API详细

#### 标识

`core/api/get`

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"id": 1,
		"mark": "test/test",
		"verification": 3,
		"multipart_file": false,
		"description": "新添加的API",
		"controller_code": "async function api (params, files, ctx, statusFun) {\n    // 新添加的API\n}",
		"updated_at": "2017-05-20T12:33:45.068Z",
		"created_at": "2017-05-20T12:33:45.068Z"
	}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/api/get",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		id: 1
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/api/get` 工具说明文档