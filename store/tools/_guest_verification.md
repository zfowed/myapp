
### 获取来宾用户的验证模式

#### 标识

`core/guest/verification`

> await tool();

#### 例子

```javascript
const tool = ctx.getTool('core/guest/verification');
tool().then(res=>{
	/**
	 * {
	 *   "verification_route_bypass": true,
	 *   "verification_route": [],
	 *   "verification_api_bypass": false,
	 *   "verification_api": [],
	 * }
	 */
}).catch(err=>{
    // err => 错误提示
})
```