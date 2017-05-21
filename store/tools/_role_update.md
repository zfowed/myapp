
### 更新用户角色

#### 标识

`core/role/update`

> await tool(id, params);

#### 请求参数

| KEY                              | 类型   | 描述                      |
| -------------------------------- | ------ | ------------------------- |
| id                               | Number  | ID                       |
| params                           | Object  | 参数对象                 |
| params.name                      | String  | 角色昵称                 |
| params.verification_route_bypass | Boolean | 验证路由是否开启绕行模式 |
| params.verification_route        | Array   | 验证路由是否可以访问     |
| params.verification_api_bypass   | Boolean | 验证API是否开启绕行模式  |
| params.verification_api          | Array   | 验证API是否可以访问      |
| params.description               | String  | 说明                     |

#### 例子

```javascript
const tool = ctx.getTool('core/role/update');
tool(1, {
	"name": "newRole",
	"verification_route_bypass": true,
	"verification_route": ['/admin/**'],
	"verification_api_bypass": false,
	"verification_api": [],
	"description": "一个新的角色",
}).then(res=>{
	// 更新成功
}).catch(err=>{
	// err  => 错误提示
})
```