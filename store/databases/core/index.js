const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');

const { getPath, config } = require('../../index');

/**
 * 实例化数据库
 * @type {String}   host     主机
 * @type {Function} logging  记录
 * @type {String}   dialect 数据库类型 'mysql'|'mariadb'|'sqlite'|'postgres'|''mssql
 * @type {String}   storage 是SQLite独有的，用于指定存储的文件
 * 
 */
const sequelize = new Sequelize('coreDB', null, null, {
	// logging: console.log,
	logging: null,
	dialect: 'sqlite',
	storage: getPath(config.get('core_databases.storage').value()),
});

/** 验证登录，相当于连接数据库 */
sequelize.authenticate();

/** 生成表 */
const tools = module.exports.tools = sequelize.define('tools', {
	id: {
		type: Sequelize.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false,
		comment: "ID 自动递增 主KEY 唯一 不允许为空"
	},
	mark: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		comment: "标识 不允许为空"
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "描述 不允许为空"
	},
	controller_code: {
		type: Sequelize.TEXT,
		allowNull: false,
		comment: "控制器代码 不允许为空"
	},
}, {
	/** @type {Boolean} 添加时间戳属性(updatedAt, createdAt) */
	timestamps: true,
	/** @type {Boolean} 不要删除数据库条目，但设置新添加的属性deletedAt */
	paranoid: false,
	/** @type {Boolean} 时间戳属性使用下划线样式 */
	underscored: true,
	/** @type {Boolean} 禁用修改表名 */
	freezeTableName: true,
	/** @type {String} 定义表的名称 */
	tableName: 'tools',
	/** @type {String} 注释 */
	comment: '工具表'
});
const routes = module.exports.routes = sequelize.define('routes', {
	id: {
		type: Sequelize.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false,
		comment: "ID 自动递增 主KEY 唯一 不允许为空"
	},
	uri: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "URI 不允许为空"
	},
	method: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "方法 不允许为空"
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "描述 不允许为空"
	},
	controller_code: {
		type: Sequelize.TEXT,
		allowNull: false,
		comment: "控制器代码 不允许为空"
	},
}, {
	/** @type {Boolean} 添加时间戳属性(updatedAt, createdAt) */
	timestamps: true,
	/** @type {Boolean} 不要删除数据库条目，但设置新添加的属性deletedAt */
	paranoid: false,
	/** @type {Boolean} 时间戳属性使用下划线样式 */
	underscored: true,
	/** @type {Boolean} 禁用修改表名 */
	freezeTableName: true,
	/** @type {String} 定义表的名称 */
	tableName: 'routes',
	/** @type {String} 注释 */
	comment: '路由表'
});
const apis = module.exports.apis = sequelize.define('apis', {
	id: {
		type: Sequelize.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false,
		comment: "ID 自动递增 主KEY 唯一 不允许为空"
	},
	mark: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		comment: "标识 不允许为空"
	},
	verification: {
		type: Sequelize.BIGINT,
		allowNull: false,
		comment: "验证模式 0:所有用户 1:登录的用户 2:超级管理员 3:角色权限管理"
	},
	multipart_file: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		comment: "是否开启【multipart/form-data】文件上传"
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "描述 不允许为空"
	},
	controller_code: {
		type: Sequelize.TEXT,
		allowNull: false,
		comment: "控制器代码 不允许为空"
	},
}, {
	/** @type {Boolean} 添加时间戳属性(updatedAt, createdAt) */
	timestamps: true,
	/** @type {Boolean} 不要删除数据库条目，但设置新添加的属性deletedAt */
	paranoid: false,
	/** @type {Boolean} 时间戳属性使用下划线样式 */
	underscored: true,
	/** @type {Boolean} 禁用修改表名 */
	freezeTableName: true,
	/** @type {String} 定义表的名称 */
	tableName: 'apis',
	/** @type {String} 注释 */
	comment: 'API表'
});
const users = module.exports.users = sequelize.define('users', {
	id: {
		type: Sequelize.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false,
		comment: "ID 自动递增 主KEY 唯一 不允许为空"
	},
	user: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		comment: "用户名 不允许为空"
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "密码 不允许为空"
	},
	role_id: {
		type: Sequelize.BIGINT,
		allowNull: false,
		comment: "角色ID 不允许为空"
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "描述 不允许为空"
	},
}, {
	/** @type {Boolean} 添加时间戳属性(updatedAt, createdAt) */
	timestamps: true,
	/** @type {Boolean} 不要删除数据库条目，但设置新添加的属性deletedAt */
	paranoid: false,
	/** @type {Boolean} 时间戳属性使用下划线样式 */
	underscored: true,
	/** @type {Boolean} 禁用修改表名 */
	freezeTableName: true,
	/** @type {String} 定义表的名称 */
	tableName: 'users',
	/** @type {String} 注释 */
	comment: '用户表'
});
const roles = module.exports.roles = sequelize.define('roles', {
	id: {
		type: Sequelize.BIGINT,
		autoIncrement: true,
		primaryKey: true,
		unique: true,
		allowNull: false,
		comment: "ID 自动递增 主KEY 唯一 不允许为空"
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
		comment: "昵称 不允许为空"
	},
	verification_route_bypass: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		comment: "验证路由 是否开启绕行模式"
	},
	verification_route: {
		type: Sequelize.TEXT,
		allowNull: false,
		comment: "验证路由 JSON格式 {Array} URI"
	},
	verification_api_bypass: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		comment: "验证路由 是否开启绕行模式"
	},
	verification_api: {
		type: Sequelize.TEXT,
		allowNull: false,
		comment: "验证路由 JSON格式 {Array} 标识"
	},
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		comment: "描述 不允许为空"
	},
}, {
	/** @type {Boolean} 添加时间戳属性(updatedAt, createdAt) */
	timestamps: true,
	/** @type {Boolean} 不要删除数据库条目，但设置新添加的属性deletedAt */
	paranoid: false,
	/** @type {Boolean} 时间戳属性使用下划线样式 */
	underscored: true,
	/** @type {Boolean} 禁用修改表名 */
	freezeTableName: true,
	/** @type {String} 定义表的名称 */
	tableName: 'roles',
	/** @type {String} 注释 */
	comment: '角色表'
});


// 联表模型
// roles.hasMany(users, { foreignKey: 'id' });
users.belongsTo(roles, { foreignKey: 'role_id' });




const getList = async function (db, unit_step, page_current, option) {
	if (!option) { option = {}; }
	if (typeof unit_step !== 'number' || unit_step < 1) {
		return reject('"unit_step"必须是一个大于等于1的数字');
	} else if (typeof page_current !== 'number' || page_current < 1) {
		return reject('"page_current"必须是一个大于等于1的数字');
	} else if (typeof option !== 'object') {
		return reject('"option"必须是一个对象');
	}
	
	const unitCountExample = await db.findOne(Object.assign({},option, {
		limit: undefined,
		offset: undefined,
		include: undefined,
		attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'unit_count']],
	}));

	const listDataExample = await db.findAll(Object.assign({},option, {
		limit: unit_step,
		offset: (page_current - 1) * unit_step,
	}));


	const { unit_count } = unitCountExample.get();
	const page_count = unit_count > 0 ? Math.ceil(unit_count / unit_step) : 1;

	return { unit_step, unit_count, page_current, page_count, list_data: listDataExample };
};

roles.getList = async function (unit_step, page_current, option) {
	return getList(roles, unit_step, page_current, option);
};
users.getList = async function (unit_step, page_current, option) {
	return getList(users, unit_step, page_current, Object.assign({}, option, {
		attributes: { exclude: ['password'] },
		include: { model: roles }
	}));
};


sequelize.sync({
	// force: true, // 这将首先丢弃表并重新创建它
}).then(function () {
	
}).error(function(e) {
	
});


