
### 检查代码

#### 标识

`core/checkCode`

> await tool(code, [, config]);

#### 参数

| KEY    | 类型   | 描述           |
| ------ | ------ | -------------- |
| code   | String | 需要检查的代码 |
| config | String | ESLint配置     |

#### 例子

```javascript
const tool = ctx.getTool('core/checkCode');
tool('variable = ""').then(res=>{
	/**
	 * [
	 *   {
	 *     "ruleId":"no-undef",
	 *     "severity":2,
	 *     "message":"'variable' is not defined.",
	 *     "line":2,
	 *     "column":5,
	 *     "nodeType":"Identifier",
	 *     "source":"variable"
	 *   }
	 * ]
	 */
}).catch(err=>{
    // err => 错误提示
})
```

### 默认ESLint配置

没有config配置时，将使用下面的配置：

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
