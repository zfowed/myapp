
### 添加用户

#### 标识

`core/user/add`

#### 请求参数

| KEY         | 类型    | 描述   |
| ----------- | ------- | ------ |
| user        | String  | 用户名 |
| password    | String  | 密码   |
| role_id     | Number  | 角色ID |
| description | String  | 说明   |

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
	url: "http://localhost:3000/api/core/user/add",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"user": "user",
		"password": "123456",
		"role_id": 1,
		"description": "一个新的用户",
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/user/add` 工具说明文档