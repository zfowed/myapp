### 统一API接口

#### 浏览器端设置

#### jquery.ajax请求

```javascript

const api_mark = 'core/login'; // 登录接口API标识
const user = 'sroot'; // 用户账号
const password = '123456'; // 用户密码

/** JSONP请求 */
$.ajax({
	type: "get", // 使用GET请求
	url: "http://localhost:3000/api/" + api_mark, // API统一接口
	dataType: "jsonp", // 数据类型为JSONP格式
	jsonpCallback: "callback", // JSONP回调函数名称为"callback"
	data: { user, password }, // 请求参数
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		// 请求成功执行
	}
});

/** POST跨域请求 */
$.ajax({
	type: "post", // 使用POST请求
	url: "http://localhost:3000/api/" + api_mark, // API统一接口
	dataType: "json", // 数据类型为JSON格式
	data: { user, password }, // 请求参数
	xhrFields: {
		withCredentials: true, // 支持跨域发送cookies
	},
	success: function (data, textStatus, jqXHR) {
		// 请求成功执行
	}
});

```

#### axios请求

```javascript

const api_mark = 'core/login'; // 登录接口API标识
const user = 'sroot'; // 用户账号
const password = '123456'; // 用户密码

axios({
	method: 'post', // 使用POST请求
	url: 'http://localhost:3000/api/" + api_mark, // API统一接口
	data: { user, password }, // 请求参数
	withCredentials: true, // withCredentials跨域请求
}).then(response=>{
	// 请求成功执行
}, err=>{
	// 请求错误执行
})
```

### 服务端添加API示例

```javascript
/**
 * API控制器
 * @param  {Object}   params     请求的参数
 * @param  {Object}   files      上传的文件(multipart/form-data)
 * @param  {Object}   ctx        上下文(参考koa官网)
 * @param  {Function} statusFun  统一返回的数据(code,msg,data)
 * @return {Object}              返回API处理后的数据
 */
async function api (params, files, ctx, statusFun) {

	/**
	 * 更多请查看 "core/api/add" 工具说明文档
	 */

	return statusFun(200, 'ok', {});

}

```