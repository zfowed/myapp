
### 获取API详细

#### 标识

`core/api/get`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/api/get');
tool(1).then(res=>{
	/**
	 * {
	 *   "id": 1,
	 *   "mark": "test/test",
	 *   "verification": 3,
	 *   "multipart_file": false,
	 *   "description": "新添加的API",
	 *   "controller_code": "async function api (params, files, ctx, statusFun) { return statusFun(); }",
	 *   "updated_at": "2017-05-20T12:33:45.068Z",
	 *   "created_at": "2017-05-20T12:33:45.068Z"
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```