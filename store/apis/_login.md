
### 登录

#### 标识

`core/login`

#### 请求参数

| KEY      | 类型   | 描述 |
| -------- | ------ | ---- |
| user     | String | 账号 |
| password | String | 密码 |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "登录成功！",
	"data": {}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/login",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"user": "sroot",
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