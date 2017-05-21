
### 删除工具方法

#### 标识

`core/tool/update`

> await tool(id, params);

#### 请求参数

| KEY                    | 类型   | 描述       |
| ---------------------- | ------ | ---------- |
| id                     | Number | ID         |
| params                 | Object | 参数对象   |
| params.mark            | String | 标识       |
| params.description     | String | 说明       |
| params.controller_code | String | 控制器代码 |

#### 例子

```javascript
const tool = ctx.getTool('core/tool/update');
tool(1, {
	mark: 'test',
	description: '这是一个工具方法',
	controller_code: 'async function tool () { return '这是一个工具方法'; }'
}).then(()=>{
	// 成功更新
}).catch(err=>{
	// err  => 错误提示
})
```