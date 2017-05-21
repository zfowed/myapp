
### 获取核心工具方法列表

#### 标识

`core/tool/core`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/tool/core');
tool().then(res=>{
	/**
	 * [
	 *   {
	 *     "mark": "core/api/add",
	 *     "description": "添加API"
	 *   },
	 *   ...
	 * ]
	 */
}).catch(err=>{
	// err  => 错误提示
})
```