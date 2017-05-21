
### 获取工具方法详细

#### 标识

`core/tool/get`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/tool/get');
tool(1).then(res=>{
	/**
	 * {
	 *   "id": 1,
	 *   "mark": "test",
	 *   "description": "新添加的工具方法",
	 *   "controller_code": "async function tool () { return 'test'; }",
	 *   "updated_at": "2017-05-20T02:40:11.533Z",
	 *   "created_at": "2017-05-20T02:37:00.225Z"
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```