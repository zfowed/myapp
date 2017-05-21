
### 获取核心工具方法使用说明

#### 标识

`core/tool/core/help`

> await tool(mark);

#### 参数

| KEY  | 类型   | 描述 |
| ---- | ------ | ---- |
| mark | String | 标识 |

#### 例子

```javascript
const tool = ctx.getTool('core/tool/core/help');
tool('test').then(readme=>{
	// readme = " ## markdown格式的工具方法使用说明"
}).catch(err=>{
    // err => 错误提示
})
```
