
### 注销当前账号

#### 标识

`core/logout`

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "注销成功！",
	"data": {}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/logout",
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
