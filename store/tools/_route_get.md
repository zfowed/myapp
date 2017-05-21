
### 获取路由详细

#### 标识

`core/route/get`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/route/get');
tool(1).then(()=>{
	/**
	 * {
	 *   "id": 1,
	 *   "uri": "/",
	 *   "method": "get",
	 *   "description": "新添加的路由",
	 *   "controller_code": "async function routing (ctx, next) { ctx.body = 'index'; }",
	 *   "updated_at": "2017-05-20T02:38:10.091Z",
	 *   "created_at": "2017-05-20T02:33:33.078Z"
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```