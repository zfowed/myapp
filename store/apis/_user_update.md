
### 更新工具方法

#### 标识

`core/user/update`

#### 请求参数

| KEY         | 类型    | 描述   |
| ----------- | ------- | ------ |
| id          | String  | id     |
| user        | String  | 用户名 |
| password    | String  | 密码   |
| role_id     | Number  | 角色ID |
| description | String  | 说明   |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "更新成功！",
	"data": {}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/user/update",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"id": 1
		"user": "user",
		"password": "123456",
		"role_id": 1,
		"description": "用户",
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/user/update` 工具说明文档