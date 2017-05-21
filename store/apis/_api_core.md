
### 获取核心API列表

#### 标识

`core/api/core`

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": [
		{
			"mark": "core/api/add",
			"verification": 2,
			"description": "获取核心API列表"
		},
		{
			"mark": "core/api/core",
			"verification": 2,
			"description": "获取核心API列表"
		},
		...
	]
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/api/core",
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

> 更多请查看 `core/api/core` 工具说明文档