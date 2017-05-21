
### 删除工具方法

#### 标识

`core/tool/del`

> await tool(id);

#### 请求参数

| KEY | 类型   | 描述 |
| --- | ------ | ---- |
| id  | Number | ID   |

#### 例子

```javascript
const tool = ctx.getTool('core/tool/del');
tool(1).then(()=>{
	// 成功删除
}).catch(err=>{
	// err  => 错误提示
})
```