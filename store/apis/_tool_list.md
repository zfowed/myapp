
### 获取工具方法列表

#### 标识

`core/tool/list`

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": [
		{
			"id": 1,
			"mark": "tool1",
			"description": "工具方法1",
			"updated_at": "2017-05-20T02:40:11.533Z"
		},
		{
			"id": 1,
			"mark": "tool2",
			"description": "工具方法2",
			"updated_at": "2017-05-20T02:40:11.533Z"
		},
		...
	]
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/tool/list",
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

> 更多请查看 `core/tool/list` 工具说明文档