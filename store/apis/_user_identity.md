
### 获取当前身份

#### 标识

`core/user/identity`

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"user": "sroot",
		"role": "Sroot"
	}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/user/identity",
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
