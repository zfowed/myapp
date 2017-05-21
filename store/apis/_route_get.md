
### 获取路由详细

#### 标识

`core/route/get`

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"id": 1,
		"uri": "/",
		"method": "get",
		"description": "新添加的路由",
		"controller_code": "async function routing (ctx, next) { ctx.body = 'index'; }",
		"updated_at": "2017-05-20T02:38:10.091Z",
		"created_at": "2017-05-20T02:33:33.078Z"
	}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/route/get",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		id: 1
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/route/get` 工具说明文档