
### 添加路由

#### 标识

`core/route/add`

> await tool(params);

#### 请求参数

| KEY                    | 类型    | 描述      |
| ---------------------- | ------- | --------- |
| params                 | Object | 参数对象   |
| params.uri             | String | URI        |
| params.method          | String | 方法       |
| params.description     | String | 说明       |
| params.controller_code | String | 控制器代码 |


#### 例子

```javascript
const tool = ctx.getTool('core/role/del');
tool({
	uri: '/admin/:path',
	method: 'get',
	description: '管理员页面',
	controller_code: 'async function route (ctx, next) { return ctx.body = \'admin path\'; }'
}).then(()=>{
	// 添加成功
}).catch(err=>{
	// err  => 错误提示
})
```

#### 参数相关说明

*   `params.uri` `[String]` URI

    Express样式uri字符串 如：`/user/:id/**` `/admin/**` `/tmp/` 等路由格式

*   `params.method` `[String]` 方法

    只能是 `get` 和 `post`

*   `params.description` `[String]` 这个用户角色的简单说明

    这是一个没有什么实际的用途的参数，用于前台展示和方便管理员记忆的一些描述

*   `params.controller_code` `[String]` 生成路由的控制器的代码

    控制器代码必须符合以下正则表达式：

    `/^[\s\n]*?(?:(async)\ +?)?function(?:\ +?([_$a-zA-Z][_$a-zA-Z0-9]*?))?\ *?\((\ *?[_$a-zA-Z][_$a-zA-Z0-9]*?\ *?(?:,\ *?[_$a-zA-Z][_$a-zA-Z0-9]*?\ *?)*?)?\)\ *?{([\s\S]*?)\}[\s\n]*?$/`

    同时必须遵循ESLint的语法检查，ESLint配置参数如下：

    ```json
    {
        "extends": "eslint:recommended",
        "parser": "babel-eslint",
        "env": {
            "browser": false,
            "node": false,
            "es6": true,
        },
        "rules": {
            "no-alert": 2,
            "no-catch-shadow": 2,
            "no-class-assign": 2,
            "no-cond-assign": 2,
            "no-console": 2,
            "no-const-assign": 2,
            "no-control-regex": 2,
            "no-debugger": 2,
            "no-delete-var": 1,
            "no-dupe-keys": 2,
            "no-dupe-args": 2,
            "no-duplicate-case": 2,
            "no-empty": 1,
            "no-empty-character-class": 1,
            "no-eq-null": 1,
            "no-eval": 2,
            "no-ex-assign": 2,
            "no-implied-eval": 2,
            "no-invalid-regexp": 2,
            "no-self-compare": 1,
            "no-shadow-restricted-names": 2,
            "no-sparse-arrays": 2,
            "no-undef": 2,
            "no-new-func": 2,
        }
    }
    ```

    控制器参数：

    > async function router (ctx, next) { return statusFun(); }

    > 更多查看[koa-router](https://www.npmjs.com/package/koa-router)

    *   `ctx.params` `[Object]` 路由uri的查询对象

    *   `ctx.query` `[Object]` 查询对象

    *   `ctx.request.body` `[Object]` POST传参body对象

    *   `ctx.request.getFormidable` `[AsyncFunction]` 解析 `multipart/form-data` 协议

        如果是 `POST` `multipart/form-data` 协议的话，需要手动执行这个 `AsyncFunction`

        ```javascript
        async function (ctx, next) {
            if (ctx.is('multipart/form-data')) {
                const { fields } = await ctx.request.getFormidable();
            }
        }
        ```

        如果需要接收上传的文件，传一个true就好了

        ```javascript
        async function (ctx, next) {
            if (ctx.is('multipart/form-data')) {
                const { fields, files } = await ctx.request.getFormidable(true);
            }
        }
        ```
    *   `ctx.session` `[Object]` 用户session会话对象

    *   `ctx.getTool` `[Function]` 获取工具方法

    *   `ctx.render` `[Function]` 渲染模板

        > 更多查看[koa-views](https://www.npmjs.com/package/koa-views)