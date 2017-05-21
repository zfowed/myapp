
### 更新用户密码

#### 标识

`core/user/password`

> await tool(password);

#### 请求参数

| KEY      | 类型   | 描述       |
| -------- | ------ | ---------- |
| user     | String | 用户账号   |
| password | String | 用户密码   |

#### 例子

```javascript
const tool = ctx.getTool('core/user/password');
tool('user', '123456').then(res=>{
	// 修改成功
}).catch(err=>{
	// err  => 错误提示
})
```