
### 获取API列表

#### 标识

`core/api/list`

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": [
		{
			"id": 1,
			"mark": "test1",
			"verification": 3,
			"description": "新添加的API1",
			"updated_at": "2017-05-20T12:33:45.068Z"
		},
		{
			"id": 2,
			"mark": "test2",
			"verification": 3,
			"description": "新添加的API2",
			"updated_at": "2017-05-20T12:33:45.068Z"
		},
		...
	]
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/api/list",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/api/list` 工具说明文档