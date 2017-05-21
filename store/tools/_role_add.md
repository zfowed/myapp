
### 添加用户角色

#### 标识

`core/role/add`

> await tool(params);

#### 参数

| KEY                              | 类型    | 描述                     |
| -------------------------------- | ------- | ------------------------ |
| params                           | Object  | 参数对象                 |
| params.name                      | String  | 角色昵称                 |
| params.verification_route_bypass | Boolean | 验证路由是否开启绕行模式 |
| params.verification_route        | Array   | 验证路由是否可以访问     |
| params.verification_api_bypass   | Boolean | 验证API是否开启绕行模式  |
| params.verification_api          | Array   | 验证API是否可以访问      |
| params.description               | String  | 说明                     |

#### 例子

```javascript
const tool = ctx.getTool('core/role/add');
tool({
	"name": "newRole",
	"verification_route_bypass": true,
	"verification_route": ['/admin/**'],
	"verification_api_bypass": false,
	"verification_api": [],
	"description": "一个新的角色",
}).then(()=>{
    // 添加成功
}).catch(err=>{
    // err => 错误提示
})
```

#### 参数相关说明

*   `params.name` `[String]` 角色昵称（唯一）

    用于 `core/user/identity` API接口显示当前用户所属的角色

*   `params.verification_route_bypass` `[Boolean]` 验证路由是否开启绕行模式

    true: 默认该角色可以访问所有路由，如果 `params.verification_route` 匹配了当前路由则禁止访问当前路由

    false: 默认该角色禁止访问所有路由，如果 `params.verification_route` 匹配了当前路由则可以访问当前路由

*   `params.verification_route` `[Array]` 验证路由是否可以访问

    数组存储的是 Express样式uri字符串 如：`/user/:id/**` `/admin/**` `/tmp/` 等路由格式

*   `params.verification_api_bypass` `[Boolean]` 验证API是否开启绕行模式

    true: 默认该角色可以访问所有API，如果 `params.verification_api` 匹配了当前API则禁止访问当前API

    false: 默认该角色禁止访问所有API，如果 `params.verification_api` 匹配了当前API则可以访问当前API

*   `params.verification_api` `[Array]` 验证API是否可以访问

    数组存储的是 API标识

*   `params.description` `[String]` 这个用户角色的简单说明

    这是一个没有什么实际的用途的参数，用于前台展示和方便管理员记忆的一些描述
