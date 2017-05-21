
### 更新API

#### 标识

`core/api/update`

> await tool(id, params);

| KEY                    | 类型   | 描述                |
| ---------------------- | ------ | ------------------- |
| id                     | Number  | 需要更新的AIP的ID  |
| params                 | Object  | 参数对象           |
| params.mark            | String  | 标识               |
| params.verification    | Number  | 验证模式           |
| params.multipart_file  | Boolean | 是否开启上传文件   |
| params.description     | String  | 说明               |
| params.controller_code | String  | 控制器代码         |

#### 例子

```javascript
const tool = ctx.getTool('core/api/update');
tool(1, {
	mark: 'test',
	verification: 0,
	multipart_file: false,
	description: '这是一个测试的API',
	controller_code: 'async function api (params, files, ctx, statusFun) { return statusFun(); }'
}).then(()=>{
    // 成功更新API
}).catch(err=>{
    // err => 错误提示
})
```