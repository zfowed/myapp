
### 添加API

#### 标识

`core/api/add`

> await tool(params);

#### 参数

| KEY                    | 类型    | 描述               |
| ---------------------- | ------- | ------------------ |
| params                 | Object  | 参数对象           |
| params.mark            | String  | 标识               |
| params.verification    | Number  | 验证模式           |
| params.multipart_file  | Boolean | 是否开启上传文件   |
| params.description     | String  | 说明               |
| params.controller_code | String  | 控制器代码         |

#### 例子

```javascript
const tool = ctx.getTool('core/api/add');
tool({
	mark: 'test',
	verification: 0,
	multipart_file: false,
	description: '这是一个测试的API',
	controller_code: 'async function api (params, files, ctx, statusFun) { return statusFun(); }'
}).then(()=>{
    // 成功添加API
}).catch(err=>{
    // err => 错误提示
})
```

#### 参数相关说明

*   `params.mark` `[String]` 获取AIP的标识

    这是获取该AIP的唯一标识，我们假设你的AIP统一结果设置为 `/api` ，那么将会生成 `/api/:mark*` 这么一个系统核心路由，此时如果你的 `params.mark` 为 `login` ，那么将可以通过 `/api/login` 来访问你的AIP接口。

*   `params.verification` `[Number]` AIP的验证模式

    AIP的验证模式有4种，分别为：

    0: 所有用户都可以访问这个API接口，如登录接口；

    1: 只有登录了的用户才可以访问这个API接口，如注销登录接口；

    2: 只有超级管理员才可以访问这个API接口，如对数据库增删改查；

    3: 根据用户所属的角色权限来确定是否可以访问这个API接口，俗称自定义。

*   `params.multipart_file` `[Boolean]` 是否开启上传文件

    如果为 `true` 将接收 `multipart/form-data` 协议里的文件。存储到临时文件夹并将文件对象传到AIP `files` 参数中。

*   `params.description` `[String]` 这个AIP接口的简单说明

    这是一个没有什么实际的用途的参数，用于前台展示和方便管理员记忆的一些描述

*   `params.controller_code` `[String]` 生成API的控制器的代码

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

	> async function api (params, files, ctx, statusFun) { return statusFun(); }

	*   `params` `[Object]` 获取访问API的参数

        请求示例

        ```html

        <form action="http://localhost:3000/api/test" method="get">
        	<input type="text" name="key1" value="value1" />
        	<input type="text" name="key2" value="value2" />
        	<input type="text" name="key3" value="value3" />
        </form>

        <form action="http://localhost:3000/api/test" method="post">
        	<input type="text" name="key1" value="value1" />
        	<input type="text" name="key2" value="value2" />
        	<input type="text" name="key3" value="value3" />
        </form>

        ```

        `params` 值

        ```json
        {
        	key1: 'value1'
        	key2: 'value2'
        	key3: 'value3'
        }
        ```

	*   `files` `[Object]` 获取访问API时上传的文件

        请求示例

        ```html

        <form action="http://localhost:3000/api/test" method="post" enctype="multipart/form-data">
            <input type="file" name="file" />
        	<input type ="submit" value="上传"/>
        </form>

        ```

        `files` 值

        ```javascript
        {
        	file: {
        		size: 45987,
        		path: 'D:\\project\\myapp\\upload_files\\upload_5924aef680dcb3535df990b6e0bdcca8',
        		name: 'files.js',
        		type: 'application/javascript',
        		lastModifiedDate: new Date('2017-05-21T06:59:07.503Z'),
        	}
        }
        ```

	*   `ctx` `[Object]` 上下文

	    详情查看[KOA官网](http://koajs.com/#context)

        *   `ctx.session` `[Object]` 用户session会话对象

        *   `ctx.getTool` `[Function]` 获取工具方法

	*   `statusFun` `[Function]` 统一返回的数据(code, msg, data)

        > statusFun(200, 'ok', {}); // => { code: 200, msg: 'ok', data: {} }

        `statusFun` 部分源码

        ```javascript
        const statusFun = function () {
        	let code = 200, msg = 'ok', data = {};
        	for ( const item of arguments ) {
        		switch ( typeof item ) {
        			case 'number': code = item; break;
        			case 'string': msg  = item; break;
        			case 'object': data = item; break;
        		}
        	}
        	return { code, msg, data };
        };
        ```