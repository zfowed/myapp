
### 获取用户角色列表

#### 标识

`core/role/list`

#### 请求参数

| KEY          | 类型   | 描述             |
| ------------ | ------ | ---------------- |
| unit_step    | Number | 单位步长(默认10) |
| page_current | Number | 当前页码(默认1)  |
| option       | Object | 选项(可选)       |

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"unit_step": 25,
		"unit_count": 100,
		"page_current": 1,
		"page_count": 4,
		"list_data": [
			{
				"id": 1,
				"name": "admin",
				"verification_route_bypass": true,
				"verification_route": [],
				"verification_api_bypass": false,
				"verification_api": [],
				"description": "Admin",
				"created_at": "2017-05-20T02:24:30.098Z",
				"updated_at": "2017-05-20T02:24:30.098Z"
			},
			{
				"id": 2,
				"name": "root",
				"verification_route_bypass": true,
				"verification_route": [],
				"verification_api_bypass": false,
				"verification_api": [],
				"description": "Root",
				"created_at": "2017-05-20T14:43:28.042Z",
				"updated_at": "2017-05-20T14:43:28.042Z"
			},
			...
		]
	}
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/role/list",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"unit_step": 25,
		"page_current": 1,
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/role/list` 工具说明文档