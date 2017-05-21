
### 校验超级管理员密码

#### 标识

`core/sroot/check`

> await tool(password);

#### 请求参数

| KEY      | 类型   | 描述             |
| -------- | ------ | ---------------- |
| password | String | 超级管理员密码   |

#### 例子

```javascript
const tool = ctx.getTool('core/sroot/check');
tool('123456').then(res=>{
	/**
	 * 密码错误 返回 null
	 *
	 * 密码正确 返回 超级管理员账户信息
	 *
	 * {
	 *   id: null,
	 *   user: 'sroot',
	 *   password: 'f+XMPP+h3J/GiggGPdXoHgJry3o=',
	 *   role_id: null,
	 *   description: '超级管理员',
	 *   created_at: '2017-05-20T01:44:07.960Z',
	 *   updated_at: '2017-05-20T01:44:07.960Z',
	 *   role: {
	 *     id: null,
	 *     name: 'Sroots',
	 *     verification_route_bypass: true,
	 *     verification_route: [],
	 *     verification_api_bypass: true,
	 *     verification_api: [],
	 *     description: '超级管理员',
	 *     created_at: '2017-05-20T01:44:07.960Z',
	 *     updated_at: '2017-05-20T01:44:07.960Z',
	 *   }
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```