
### 抓取网站

#### 标识

`core/crawler`

> await tool(option);

| KEY    | 类型   | 描述                                                                     |
| ------ | ------ | ------------------------------------------------------------------------ |
| option | Object | 任务选项（详细配置查看[crawler](https://www.npmjs.com/package/crawler)） |

#### 例子

```javascript
const tool = ctx.getTool('core/crawler');
tool({
	uri: 'http://www.baodu.com'
}).then(res=>{
	/**
	 * 抓取回调
	 * @param  {Object}         res                 http.IncomingMessage标准IncomingMessage的响应包括$和options
	 * @param  {Number}         res.statusCode      HTTP状态码。例如200
	 * @param  {Buffer|String}  res.body            HTTP响应内容，可以是html页面，纯文本或xml文档，例如
	 * @param  {Object}         res.headers         HTTP响应头
	 * @param  {Request}        res.request         一个Mikeal的实例，Request而不是
	 * @param  {Object}         res.request.uri     HTTP请求实体的解析的url
	 * @param  {String}         res.request.method  HTTP请求方法。例如GET
	 * @param  {Object}         res.request.headers HTTP请求头
	 * @param  {Object}         res.options         此任务的选项
	 * @param  {Function}       res.$               jQuery选择器html或xml文档的选择器。
	 */
}).catch(err=>{
    /** @param  {Error} error 错误 */
})
```