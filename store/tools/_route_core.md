
### 获取核心路由列表

#### 标识

`core/route/core`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/route/core');
tool().then(res=>{
	/**
	 * [
	 *   {
	 *     "core_id": "a56ed938-b60e-4f5f-ba8b-d6648b039a69",
	 *     "uri": "/api/:mark*",
	 *     "method": "all",
	 *     "description": "API统一接口"
	 *   },
	 *   ...
	 * ]
	 */
}).catch(err=>{
	// err  => 错误提示
})
```