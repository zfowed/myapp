
### 获取核心路由列表

#### 标识

`core/route/list`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/route/list');
tool().then(res=>{
	/**
	 * [
	 *   {
	 *     "id": 1,
	 *     "uri": "/",
	 *     "method": "get",
	 *     "description": "首页",
	 *     "updated_at": "2017-05-20T02:38:10.091Z"
	 *   },
	 *   {
	 *     "id": 2,
	 *     "uri": "/admin",
	 *     "method": "get",
	 *     "description": "管理员页面",
	 *     "updated_at": "2017-05-20T02:38:10.091Z"
	 *   },
	 *   ...
	 * ]
	 */
}).catch(err=>{
	// err  => 错误提示
})
```