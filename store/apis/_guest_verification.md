
### 查看来宾用户的验证模式

#### 标识

`core/guest/verification`

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"verification_route_bypass": true,
		"verification_route": [],
		"verification_api_bypass": false,
		"verification_api": [],
	}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/guest/verification",
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

> 更多请查看 `core/guest/verification` 工具说明文档