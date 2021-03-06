
### 获取核心路由使用说明

#### 标识

`core/route/core/help`

#### 请求参数

| KEY     | 类型   | 描述       |
| ------- | ------ | ---------- |
| core_id | String | 核心路由ID |

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
	url: "http://localhost:3000/api/core/route/core/help",
	dataType: "jsonp",
	jsonpCallback: "callback",
	data: {
		core_id: 'a56ed938-b60e-4f5f-ba8b-d6648b039a69'
	},
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 更多请查看 `core/route/core/help` 工具说明文档