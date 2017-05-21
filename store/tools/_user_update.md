
### 更新用户资料

#### 标识

`core/user/update`

> await tool(id, params);

#### 请求参数

| KEY                | 类型    | 描述     |
| ------------------ | ------- | -------- |
| id                 | Number  | ID       |
| params             | Object  | 参数对象 |
| params.user        | String  | 用户名   |
| params.password    | String  | 密码     |
| params.role_id     | Number  | 角色ID   |
| params.description | String  | 说明     |

#### 例子

```javascript
const tool = ctx.getTool('core/user/update');
tool(1, {
    "user": "user",
    "password": "123456",
    "role_id": 1,
    "description": "一个新的用户",
}).then(()=>{
	// 成功更新
}).catch(err=>{
	// err  => 错误提示
})
```