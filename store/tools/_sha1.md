
### sha1加密

#### 标识

`core/sha1`

> await tool(key, string);

#### 请求参数

| KEY    | 类型   | 描述             |
| ------ | ------ | ---------------- |
| key    | String | KEY              |
| string | String | 需要加密的字符串 |

#### 例子

```javascript
const tool = ctx.getTool('core/sha1');
tool('abc', '123456').then(res=>{
	// res => 'VSWNFXfpmrZIVze1lI2OIqrTRSs='
}).catch(err=>{
	// err  => 错误提示
})
```