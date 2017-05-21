
### 获取工具方法列表

#### 标识

`core/tool/list`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/tool/list');
tool().then(res=>{
	/**
	 * [
	 *   {
	 *     "id": 1,
	 *     "mark": "tool1",
	 *     "description": "工具方法1",
	 *     "updated_at": "2017-05-20T02:40:11.533Z"
	 *   },
	 *   {
	 *     "id": 1,
	 *     "mark": "tool2",
	 *     "description": "工具方法2",
	 *     "updated_at": "2017-05-20T02:40:11.533Z"
	 *   },
	 *   ...
	 * ]
	 */
}).catch(err=>{
	// err  => 错误提示
})
```