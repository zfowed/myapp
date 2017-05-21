
### 获取核心工具方法使用说明

#### 标识

`core/tool/core/help`

#### 请求参数

| KEY  | 类型   | 描述 |
| ---- | ------ | ---- |
| mark | String | 标识 |

#### 响应结果例子

```json
{
	"code": 200,
	"msg": "ok",
	"data": {
		"readme": " ## markdown格式的路由使用说明"
	}
}

```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/tool/core/help",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		mark: 'test'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/tool/core/help` 工具说明文档