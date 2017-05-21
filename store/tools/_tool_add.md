
### 添加工具方法

#### 标识

`core/tool/add`

> await tool(params);

#### 参数

| KEY                    | 类型   | 描述       |
| ---------------------- | ------ | ---------- |
| params                 | Object | 参数对象   |
| params.mark            | String | 标识       |
| params.description     | String | 说明       |
| params.controller_code | String | 控制器代码 |

```javascript
const tool = ctx.getTool('core/tool/add');
tool({
	mark: 'test',
	description: '这是一个工具方法',
	controller_code: 'async function tool () { return '这是一个工具方法'; }'
}).then(()=>{
    // 成功添加工具方法
}).catch(err=>{
    // err => 错误提示
})
```

#### 参数相关说明

*   `params.mark` `[String]` 工具方法的标识

    这是获取该工具方法的唯一标识，假设 `params.mark` 为 "test"，获取该工具的唯一方法是调用 `ctx.getTool('test')`;

*   `params.description` `[String]` 这个工具方法的简单说明

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

    > async function tool () { return ; }

    > 是否有 `async` 标识决定了该方法是 `AsyncFunction` 还是 `Function`

    *   `this.getTool` `[Function]` 获取工具方法

        > this.getTool('test'); => 获取 `test` 工具方法

    *   `this.getPath` `[Function]` 返回从项目根目录开始的路径

        > 假设项目文件夹是 /project

        > this.getPath('/public') => /project/public

        > this.getPath('views', 'admin', 'index.html') => /project/admin/index.html

    *   `this.store` `[Object]` 集中状态管理，各个工具、路由、AIP数据的交换可以放在这个对象中

    *   `this.db` `[Object]` 数据库

        > 可以修改 /store/databases/app 源码 改变自己的数据库对象（默认是sqlite3数据库）

        *   `this.db.run` `[Function]` 执行数据库语句

            > this.db.run("CREATE TABLE lorem (info TEXT)");

        *   `this.db.get` `[Function]` 执行数据库语句，并获取一条数据

            > this.db.get("select * from test where id = 1");

        *   `this.db.all` `[Function]` 执行数据库语句，并获取匹配的数据

            > this.db.all("select * from test");