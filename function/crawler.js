const Crawler = require("crawler");

const crawler = new Crawler({



	/**
	 * 基本要求
	 */

	/** @type {String} 您要抓取的URL。 */
	// uri: '',
	/** @type {Number} 超时（以毫秒为单位）（默认值15000）。 */
	timeout: 1000,



	/**
	 * 时间表选项
	 */

	/** @type {Number} 工作池的大小（默认值10） */
	maxConnections: 100,
	/** @type {Number} 每个请求之间延迟的毫秒数（默认为0）设置为非零值时 maxConnections将被强制为1。*/
	rateLimit: 0,
	/** @type {Number} 从0开始的可接受优先级范围（默认为10） */
	priorityRange: 10,
	/** @type {Number} 此请求的优先级（默认值5） */
	priority: 5,



	/**
	 * 重试选项
	 */

	/** @type {Number} 请求失败时的重试次数（默认值3）， */
	retries: 0,
	/** @type {Number} 重试前等待的毫秒数（默认值10000） */
	retryTimeout: 0,



	/**
	 * DOM选项
	 */

	/**
	 * 如果为true或“cheerio”，使用cheerio默认配置注入文档。
	 * 或者使用解析器选项cheerio对象进行自定义。
	 * 如果为false则禁用注入jQuery选择器。
	 * 如果您的项目中存在内存泄漏问题，请使用“whacko”作为替代解析器来避免这种情况。
	 * （默认为true）
	 *
	 * Crawler默认使用Cheerio而不是JSDOM。
	 * JSDOM更强大，如果要使用JSDOM，则必须require('jsdom')在自己的脚本中将其传递给爬网程序。
	 *
	 *  jQuery ：true, //（default）
	 *  jQuery ：'cheerio',
	 *  jQuery ：{
	 *  	name: 'cheerio',
	 *  	options: {
	 *  		normalizeWhitespace: true,
	 *  		xmlMode: true
	 *  	}
	 *  },
	 *
	 * 与JSDOM合作
	 * var jsdom = require('jsdom');
	 *
	 * jQuery: jsdom,
	 *
	 * @type {Boolean|String|Object}
	 */
	jQuery: true,



	/**
	 * 字符集编码
	 */

	/** @type {Boolean} 如果为true，爬网程序将从html中的HTTP标头或元标记获取字符集，并在必要时将其转换为UTF8。不用担心编码了！ */
	forceUTF8: true,
	/** @type {String} 手动设置编码（默认为null），以便爬网程序不必自己检测到字符集。例如，incomingEncoding: 'windows-1255' */
	incomingEncoding: null,



	/**
	 * 缓存
	 */

	/** @type {Boolean} 如果true跳过已被抓取的URI，甚至不调用callback（）（默认为false）。这是不推荐的，最好处理外面Crawler使用visiblereq */
	skipDuplicates: false,



	/**
	 * 其他
	 */

	/** @type {Boolean} 如果为true，userAgent应该是一个数组并旋转它（默认为false） */
	rotateUA: false,
	/** @type {String|Array} If rotateUA是false，但是userAgent是一个数组，抓取器会使用第一个。 */
	userAgent: false,
	/** @type {String} 如果真实设置HTTP引用头 */
	referer: false,


	/** @type {Object} 头部信息 */
	headers: {},


	/**
	 * 回调
	 */


	/**
	 * 抓取回调
	 * @param  {Error}          error               错误
	 * @param  {Object}         res                 http.IncomingMessage标准IncomingMessage的响应包括$和options
	 * @param  {Number}         res.statusCode      HTTP状态码。例如200
	 * @param  {Buffer|String}  res.body            HTTP响应内容，可以是html页面，纯文本或xml文档，例如
	 * @param  {Object}         res.headers         HTTP响应头
	 * @param  {Request}        res.request         一个Mikeal的实例，Request而不是
	 * @param  {Object}         res.request.uri     HTTP请求实体的解析的url
	 * @param  {String}         res.request.method  HTTP请求方法。例如GET
	 * @param  {Object}         res.request.headers HTTP请求头
	 * @param  {Object}         res.options         此任务的选项
	 * @param  {Function}       res.$               jQuery选择器html或xml文档的选择器。
	 * @param  {Function}       done                当你在回调中完成工作时，必须调用它。
	 */
	callback (error, res, done) {
		return done();
	}
});



/**
 * 当任务被添加到调度程序时发出。
 * @param  {Object} options 任务的选项
 */
crawler.on('schedule', function(options) {
	// options.proxy = "http://proxy:port";
});

/**
 * limiter更换时发出。
 * @param  {Object} options 任务的选项
 * @param  {String} limiter 任务的选项
 */
crawler.on('limiterChange', function(options, limiter) {

});

/**
 * 抓取器准备发送请求时发出。
 * 如果要在最后阶段修改选项，请先收听。
 * @param  {Object} options 任务的选项
 */
crawler.on('request', function(options) {
	// options.qs.timestamp = new Date().getTime();
});

/**
 * 队列为空时发出。
 */
crawler.on('drain', function() {

});


/**
 * 启动任务并等待执行
 * crawler.queue(uri|options);
 */

/**
 * 队列大小，只读
 * crawler.queueSize
 */






// crawler.queue({
// 	uri: 'https://www.baidu.com',
// 	qs: {},
// })


module.exports = function (options) {
	return new Promise(async (resolve, reject) => {
		if (typeof options === 'string') {
			options = { uri: options };
		}
		options.callback = function (error, res, done) {
			if (error) {
				reject(error);
			} else {
				resolve(res);
			}
			return done();
		};
		crawler.queue(options);
	});

};
