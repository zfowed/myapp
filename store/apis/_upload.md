
### 文件上传

#### 标识

`core/upload`

#### 请求参数

| KEY             | 类型   | 描述                                |
| --------------- | ------ | ----------------------------------- |
| tool            | String | 文件上传后中转到${tool}工具方法处理 |
| ...params       |        | 中转${tool}工具方法的参数           |

#### 响应结果例子


```json
{
	"code": 200,
	"msg": "上传成功！",
	"data": {}
}
```

#### 例子


```html
<form id="uploadForm" enctype="multipart/form-data">
	<p>上传文件到静态文件夹</p>
	<p>中转工具方法标识: <input type="text" name="tool" value="core/public/to" /></p>
	<p>静态文件夹的相对路径: <input type="text" name="src" value="/dir" /></p>
	<p>选择文件: <input type="file" name="file" /></p>
	<input type ="submit" value="上传"/>
</form>
```

```javascript
const formData = new FormData($("#uploadForm")[0]);
$.ajax({
	type: "post",
	url: "http://localhost:3000/api/core/upload",
	dataType: "json",
	data: formData,
	contentType: false,
	processData: false,
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		console.log(data);
	}
});
```

> 中转${tool}工具方法参考 `core/public/to` `core/views/to`工具方法接收参数