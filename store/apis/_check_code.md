
### 检查代码

#### 标识

`core/checkCode`

#### 请求参数

| KEY    | 类型   | 描述           |
| ------ | ------ | -------------- |
| code   | String | 代码           |
| config | Object | 检查配置(可选) |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "ok",
	"data": {}
}
```

```json
{
	"code":-200,
	"msg":"line(2):variable",
	"data":[
		{
			"ruleId":"no-undef",
			"severity":2,
			"message":"'variable' is not defined.",
			"line":2,
			"column":5,
			"nodeType":"Identifier",
			"source":"variable"
		}
	]
}
```

#### 例子

```javascript
$.ajax({
	type: "get",
	url: "http://localhost:3000/api/core/checkCode",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		code: 'variable = ""'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/checkCode` 工具说明文档