
### 获取核心API使用说明

#### 标识

`core/api/core/help`

> await tool(mark);

#### 参数

| KEY  | 类型   | 描述 |
| ---- | ------ | ---- |
| mark | String | 标识 |

#### 例子

```javascript
const tool = ctx.getTool('core/api/core/help');
tool('test').then(readme=>{
	// readme = " ## markdown格式的API接口使用说明"
}).catch(err=>{
    // err => 错误提示
})
```
