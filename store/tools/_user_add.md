
### 添加用户角色

#### 标识

`core/user/add`

> await tool(params);

#### 参数

| KEY                | 类型    | 描述     |
| ------------------ | ------- | -------- |
| params             | Object  | 参数对象 |
| params.user        | String  | 用户名   |
| params.password    | String  | 密码     |
| params.role_id     | Number  | 角色ID   |
| params.description | String  | 说明     |

#### 例子

```javascript
const tool = ctx.getTool('core/role/add');
tool({
    "user": "user",
    "password": "123456",
    "role_id": 1,
    "description": "一个新的用户",
}).then(()=>{
    // 添加成功
}).catch(err=>{
    // err => 错误提示
})
```
