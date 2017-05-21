
### 获取用户详细

#### 标识

`core/user/get`

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
	}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/user/get",
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

> 更多请查看 `core/user/get` 工具说明文档