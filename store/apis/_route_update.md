
### 更新路由

#### 标识

`core/route/update`

#### 请求参数

| KEY             | 类型   | 描述       |
| --------------- | ------ | ---------- |
| id              | Number | ID         |
| uri             | String | URI        |
| method          | String | 方法       |
| description     | String | 说明       |
| controller_code | String | 控制器代码 |

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
	url: "http://localhost:3000/api/core/route/update",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		id: 2,
		uri: '/admin/:path',
		method: 'get',
		description: '管理员页面',
		controller_code: 'async function route (ctx, next) { return ctx.body = \'admin path\'; }'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/route/update` 工具说明文档