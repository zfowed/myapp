
### 获取API列表

#### 标识

`core/api/list`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/api/list');
tool().then(res=>{
	/**
	 * [
	 *   {
	 *     "id": 1,
	 *     "mark": "test1",
	 *     "verification": 3,
	 *     "description": "新添加的API1",
	 *     "updated_at": "2017-05-20T12:33:45.068Z"
	 *   },
	 *   {
	 *     "id": 2,
	 *     "mark": "test2",
	 *     "verification": 3,
	 *     "description": "新添加的API2",
	 *     "updated_at": "2017-05-20T12:33:45.068Z"
	 *   },
	 *   ...
	 * ]
	 */
}).catch(err=>{
    // err => 错误提示
})
```