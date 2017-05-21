

// 配置

const config = {
	/** API */
	"api": {
		"uri": "/api",              /** {String} 统一API接口 */
		"jsonp": true,              /** {Boolean} 是否开启JSONP（开启GET方法及设置callback） */
		"cross_domain": true,       /** {Boolean} 是否设置跨域Header信息 true:所有域可访问 {Array:String>}:指定域可访问*/
		"prompt": true,             /** {Boolean} 是否开启API错误提示，（false：不提示返回404） */
	},
	/** POST上传文件路径 */
	"body_upload": {
		"upload_dir": "./upload_files", /** {String} 路径 */
		"files_age": 86400000,          /** {Number} 上传文件的生命周期 */
		"schedule_time": "0 0 0 * * *", /** {String} 定时删除上传文件的时间 */
	},
	/** 静态文件服务器 */
	"static_service": {
		"path": "/public",              /** {String} 静态文件路径 */
		"temp_path": "/public/temp",    /** {String} 临时静态文件路径 */
		"files_age": 86400000,          /** {Number} 临时静态文件的生命周期 */
		"schedule_time": "0 0 0 * * *", /** {String} 定时删除临时静态文件的时间 */
		"option": {
			"maxage": 86400000,         /** {Number}  浏览器缓存最大值（以毫秒为单位）。 默认为0 */
			"hidden": false,            /** {Boolean} 允许传输隐藏文件。 默认为false */
			"index": "index.html",      /** {String}  默认文件名，默认为“index.html” */
			"defer": false,             /** {Boolean} 如果为true，则在下一次提供后，允许任何下游中间件首先响应。 */
			"gzip": true,               /** {Boolean} 尝试在客户端支持gzip时自动提供文件的gzip压缩版本，如果存在.gz扩展名的请求文件。 默认为true。 */
			"extensions": false,        /** {Boolean} 尝试匹配传递数组的扩展名，以便在URL中没有扩展名时搜索文件。 首先找到了。 （默认为false） */
		}
	},
	/** 视图文件 */
	"views": {
		"path": "/views",       /** {String} 视图文件存放的路径 */
		"option": {
			"extension": 'ejs', /** {String} 默认视图文件后缀 */
			"map": {            /** {Object} 根据视图文件的后缀名调用不同的模板引擎 */
				"pug": 'pug',
				"html": 'ejs',
				"ejs": 'ejs',
			}
		}
	},
	/** Session */
	"session": {
		"key": 'myapp:sess', /** {String}  Cookie键（默认为koa：sess） */
		"aes_key": "myapp",  /** {String}  Session加密密钥 */
		"maxAge": 86400000,  /** {Number}  生命周期（毫秒）（默认为1天） */
		"overwrite": true,   /** {Boolean} 是否可以覆盖（默认为true） */
		"httpOnly": true,    /** {Boolean} 仅限http（默认为true） */
		"signed": true,      /** {Boolean} 已签名或不签名（默认为true） */
	},
	/** 核心数据库 */
	"core_databases": {
		"storage": "/store/databases/data/database_core.db" /** {String} 数据库文件 */
	},
	/** 应用数据库 */
	"app_databases": {
		"storage": "/store/databases/data/database_app.db" /** {String} 数据库文件 */
	},
	"user": {
		"pwd_sha1_key": "pwdKey", /** {String} 加密密码的KEY */
		"sroot": {                /** 超级管理员账号 */
			"user": "sroot",          /** {String} 账号 */
			"password": "123456",     /** {String} 密码 */
		},
		"guest_authority": {      /** 来宾访问的权限 */
			"route": [],              /** {Array:String>} 验证路由是否访问 */
			"route_bypass": true,     /** {Boolean}       验证路由是否开启绕行模式 */
			"api": [],                /** {Array:String>} 验证API是否访问 */
			"api_bypass": false,      /** {Boolean}       验证API是否开启绕行模式 */
		},
	}
};

module.exports = config;
