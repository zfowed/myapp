
### 获取用户角色列表

#### 标识

`core/user/list`

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
		"unit_count": 2,
		"page_current": 1,
		"page_count": 1,
		"list_data": [
			{
				"id": 1,
				"user": "user",
				"role_id": 1,
				"description": "User",
				"created_at": "2017-05-20T02:24:42.166Z",
				"updated_at": "2017-05-20T02:24:42.166Z",
				"role": {
					"id": 1,
					"name": "admin",
					"verification_route_bypass": true,
					"verification_route": [],
					"verification_api_bypass": false,
					"verification_api": [],
					"description": "Admin",
					"created_at": "2017-05-20T02:24:30.098Z",
					"updated_at": "2017-05-20T02:24:30.098Z"
				}
			},
			{
				"id": 2,
				"user": "user2",
				"role_id": 1,
				"description": "User",
				"created_at": "2017-05-20T16:27:26.601Z",
				"updated_at": "2017-05-20T16:27:26.601Z",
				"role": {
					"id": 1,
					"name": "admin2",
					"verification_route_bypass": true,
					"verification_route": [],
					"verification_api_bypass": false,
					"verification_api": [],
					"description": "Admin",
					"created_at": "2017-05-20T02:24:30.098Z",
					"updated_at": "2017-05-20T02:24:30.098Z"
				}
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
	url: "http://localhost:3000/api/core/user/list",
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

> 更多请查看 `core/user/list` 工具说明文档