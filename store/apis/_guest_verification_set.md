
### 修改来宾用户的验证模式

#### 标识

`core/guest/verification/set`

#### 请求参数

| KEY                       | 类型    | 描述                     |
| ------------------------- | ------- | ------------------------ |
| verification_route_bypass | Boolean | 验证路由是否开启绕行模式 |
| verification_route        | Array   | 验证路由是否访问         |
| verification_api_bypass   | Boolean | 验证API是否开启绕行模式  |
| verification_api          | Array   | 验证API是否访问          |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "设置成功！",
	"data": {}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/guest/verification/set",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		"verification_route_bypass": true,
		"verification_route": [],
		"verification_api_bypass": false,
		"verification_api": [],
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/guest/verification/set` 工具说明文档