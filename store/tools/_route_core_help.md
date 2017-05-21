
### 获取核心路由使用说明

#### 标识

`core/route/core/help`

> await tool(core_id);

#### 参数

| KEY     | 类型   | 描述       |
| ------- | ------ | ---------- |
| core_id | String | 核心路由ID |

#### 例子

```javascript
const tool = ctx.getTool('core/route/core/help');
tool('a56ed938-b60e-4f5f-ba8b-d6648b039a69').then(readme=>{
	// readme = " ## markdown格式的路由使用说明"
}).catch(err=>{
    // err => 错误提示
})
```
