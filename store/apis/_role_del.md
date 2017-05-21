
### 删除用户角色

#### 标识

`core/role/del`

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "删除成功！",
	"data": {}
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/role/del",
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

> 更多请查看 `core/role/del` 工具说明文档