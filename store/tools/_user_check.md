
### 校验超级管理员密码

#### 标识

`core/user/check`

> await tool(user, password);

#### 请求参数

| KEY      | 类型   | 描述       |
| -------- | ------ | ---------- |
| user     | String | 用户账号   |
| password | String | 用户密码   |

#### 例子

```javascript
const tool = ctx.getTool('core/user/check');
tool('user', '123456').then(res=>{
	/**
	 * 账号密码错误 返回 null
	 *
	 * 账号密码正确 返回 超级管理员账户信息
	 *
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