
### 删除用户角色

#### 标识

`core/role/del`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/role/del');
tool(1).then(()=>{
	// 成功删除用户角色
}).catch(err=>{
	// err  => 错误提示
})
```