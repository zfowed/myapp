
### 获取核心API列表

#### 标识

`core/api/core`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/api/core');
tool().then(res=>{
	/**
	 * [
	 *   {
	 *     "mark": "core/api/add",
	 *     "verification": 2,
	 *     "description": "获取核心API列表"
	 *   },
	 *   {
	 *     "mark": "core/api/core",
	 *     "verification": 2,
	 *     "description": "获取核心API列表"
	 *   },
	 *   ...
	 * ]
	 */
}).catch(err=>{
    // err => 错误提示
})
```