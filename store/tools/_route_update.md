
### 删除路由

#### 标识

`core/route/update`

> await tool(id, params);

#### 请求参数

| KEY                    | 类型   | 描述       |
| ---------------------- | ------ | ---------- |
| id                     | Number | ID         |
| params                 | Object | 参数对象   |
| params.uri             | String | URI        |
| params.method          | String | 方法       |
| params.description     | String | 说明       |
| params.controller_code | String | 控制器代码 |

#### 例子

```javascript
const tool = ctx.getTool('core/route/del');
tool(1, {
	uri: '/admin/:path',
	method: 'get',
	description: '管理员页面',
	controller_code: 'async function route (ctx, next) { return ctx.body = \'admin path\'; }'
}).then(()=>{
	// 成功更新
}).catch(err=>{
	// err  => 错误提示
})
```