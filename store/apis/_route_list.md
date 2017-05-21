
### 获取路由列表

#### 标识

`core/route/list`

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": [
		{
			"id": 1,
			"uri": "/",
			"method": "get",
			"description": "首页",
			"updated_at": "2017-05-20T02:38:10.091Z"
		},
		{
			"id": 2,
			"uri": "/admin",
			"method": "get",
			"description": "管理员页面",
			"updated_at": "2017-05-20T02:38:10.091Z"
		},
		...
	]
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/route/list",
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

> 更多请查看 `core/route/list` 工具说明文档