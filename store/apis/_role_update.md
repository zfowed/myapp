
### 登录

#### 更新用户角色

`core/role/update`

#### 请求参数

| KEY                       | 类型    | 描述                     |
| ------------------------- | ------- | ------------------------ |
| id                        | Number  | 角色ID                   |
| name                      | String  | 角色昵称                 |
| verification_route_bypass | Boolean | 验证路由是否开启绕行模式 |
| verification_route        | Array   | 验证路由是否可以访问     |
| verification_api_bypass   | Boolean | 验证API是否开启绕行模式  |
| verification_api          | Array   | 验证API是否可以访问      |
| description               | String  | 说明                     |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "添加成功！",
	"data": {}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/role/update",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"name": "newRole",
		"verification_route_bypass": true,
		"verification_route": [],
		"verification_api_bypass": false,
		"verification_api": [],
		"description": "一个新的角色",
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/role/update` 工具说明文档