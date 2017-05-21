
### 修改来宾用户的验证模式

#### 标识

`core/guest/verification/set`

> await tool(params);

#### 请求参数

| KEY                              | 类型    | 描述                     |
| -------------------------------- | ------- | ------------------------ |
| params                           | Object  | 参数对象                 |
| params.verification_route_bypass | Boolean | 验证路由是否开启绕行模式 |
| params.verification_route        | Array   | 验证路由是否访问         |
| params.verification_api_bypass   | Boolean | 验证API是否开启绕行模式  |
| params.verification_api          | Array   | 验证API是否访问          |

#### 例子

```javascript
const tool = ctx.getTool('core/guest/verification/set');
tool({
	"verification_route_bypass": true,
	"verification_route": [],
	"verification_api_bypass": false,
	"verification_api": [],
}).then(()=>{
    // 修改成功
}).catch(err=>{
    // err => 错误提示
})
```