
### 获取用户角色详细

#### 标识

`core/role/get`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/role/get');
tool(1).then(res=>{
	/**
	 * {
	 *   "id": 1,
	 *   "name": "admin",
	 *   "verification_route_bypass": true,
	 *   "verification_route": [],
	 *   "verification_api_bypass": false,
	 *   "verification_api": [],
	 *   "description": "一个新的角色",
	 *   "created_at": "2017-05-20T02:24:30.098Z",
	 *   "updated_at": "2017-05-20T02:24:30.098Z"
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```