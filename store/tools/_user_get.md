
### 获取用户详细

#### 标识

`core/user/get`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/user/get');
tool(1).then(res=>{
	/**
	 * {
	 *   id: 1,
	 *   user: 'user',
	 *   password: 'f+XMPP+h3J/GiggGPdXoHgJry3o=',
	 *   role_id: 1,
	 *   description: '用户',
	 *   created_at: '2017-05-20T01:44:07.960Z',
	 *   updated_at: '2017-05-20T01:44:07.960Z',
	 *   role: {
	 *     id: 1,
	 *     name: 'admin',
	 *     verification_route_bypass: true,
	 *     verification_route: [],
	 *     verification_api_bypass: true,
	 *     verification_api: [],
	 *     description: '管理员',
	 *     created_at: '2017-05-20T01:44:07.960Z',
	 *     updated_at: '2017-05-20T01:44:07.960Z',
	 *   }
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```