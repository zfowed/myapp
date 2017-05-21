
### 获取工具方法详细

#### 标识

`core/tool/get`

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
		"mark": "test",
		"description": "新添加的工具方法",
		"controller_code": "async function tool () { return 'test'; }",
		"updated_at": "2017-05-20T02:40:11.533Z",
		"created_at": "2017-05-20T02:37:00.225Z"
	}
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/tool/get",
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

> 更多请查看 `core/tool/get` 工具说明文档