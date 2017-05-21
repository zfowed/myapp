module.exports = function (app) {
	
	/** 会话 */
	require('./_koa_session')(app);

	/** 静态文件 */
	require('./_koa_static')(app);

	/** 嵌套查询字符串支持 */
	require('./_koa_qs')(app);

	/** 处理BODY数据 */
	require('./_koa_body')(app);

	/** 视图模板 */
	require('./_koa_views')(app);

	/** 获取工具方法 */
	require('./_ctx_tool')(app);
		
	/** 路由 */
	require('./_koa_router')(app);
	
};