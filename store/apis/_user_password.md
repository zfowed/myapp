
### 修改当前用户密码

#### 标识

`core/user/password`

#### 请求参数

| KEY       | 类型  | 描述   |
| -------- | ------ | ------ |
| password | String | 新密码 |

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "修改密码成功！",
	"data": {}
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/user/password",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"password": "123456",
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/user/password` 工具说明文档