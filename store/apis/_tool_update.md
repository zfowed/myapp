
### 更新工具方法

#### 标识

`core/tool/update`

#### 请求参数

| KEY             | 类型   | 描述       |
| --------------- | ------ | ---------- |
| id              | Number | ID         |
| mark            | String | 标识       |
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
	url: "http://localhost:3000/api/core/tool/update",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		id: 2,
		mark: 'test',
		description: '这是一个工具方法',
		controller_code: 'async function tool () { return '这是一个工具方法'; }'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/tool/update` 工具说明文档