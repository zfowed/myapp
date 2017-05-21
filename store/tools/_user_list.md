
### 获取用户列表

#### 标识

`core/user/list`

> await tool(unit_step, page_current, option);

#### 请求参数

| KEY          | 类型   | 描述             |
| ------------ | ------ | ---------------- |
| unit_step    | Number | 单位步长(默认10) |
| page_current | Number | 当前页码(默认1)  |
| option       | Object | 选项(可选)       |

#### 例子

```javascript
const tool = ctx.getTool('core/user/list');
tool(25, 1).then(res=>{
	/**
	 * {
	 *   "unit_step": 25,
	 *   "unit_count": 100,
	 *   "page_current": 1,
	 *   "page_count": 4,
	 *   "list_data": [
	 *     {
	 *       id: 1,
	 *       user: 'user',
	 *       password: 'f+XMPP+h3J/GiggGPdXoHgJry3o=',
	 *       role_id: 1,
	 *       description: '用户',
	 *       created_at: '2017-05-20T01:44:07.960Z',
	 *       updated_at: '2017-05-20T01:44:07.960Z',
	 *       role: {
	 *         id: 1,
	 *         name: 'admin',
	 *         verification_route_bypass: true,
	 *         verification_route: [],
	 *         verification_api_bypass: true,
	 *         verification_api: [],
	 *         description: '管理员',
	 *         created_at: '2017-05-20T01:44:07.960Z',
	 *         updated_at: '2017-05-20T01:44:07.960Z',
	 *       }
	 *     },
	 *     ...
	 *   ]
	 * }
	 */
}).catch(err=>{
	// err  => 错误提示
})
```