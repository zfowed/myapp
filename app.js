const Koa = require('koa');
const app = module.exports.app = new Koa();



/** 挂载中间件 */
require('./middlewares')(app);


console.log('服务器启动完毕');

/** 监听端口 */
app.listen(3000);




