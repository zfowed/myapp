
### 获取核心路由列表

#### 标识

`core/route/core`

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": [
		{
			"core_id": "a56ed938-b60e-4f5f-ba8b-d6648b039a69",
			"uri": "/api/:mark*",
			"method": "all",
			"description": "API统一接口"
		},
		...
	]
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/route/core",
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

> 更多请查看 `core/route/core` 工具说明文档