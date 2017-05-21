
### 修改超级管理员密码

#### 标识

`core/sroot/password`

> await tool(password);

#### 请求参数

| KEY      | 类型   | 描述             |
| -------- | ------ | ---------------- |
| password | String | 超级管理员密码   |

#### 例子

```javascript
const tool = ctx.getTool('core/sroot/password');
tool('123456').then(()=>{
	// 修改成功
}).catch(err=>{
	// err  => 错误提示
})
```