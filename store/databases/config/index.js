
const path = require('path');
const lowdb = require('lowdb');
const sha1 = require('../../../function/sha1');




const configDB = lowdb(path.join(__dirname, '../data/config_db.json'), { storage: require('lowdb/lib/storages/file-async') });

let configDefaults = require(path.join(__dirname, '../../../config'));


configDefaults.user.sroot = {
	id: null,
	user: configDefaults.user.sroot.user,
	password: sha1(
		configDefaults.user.pwd_sha1_key,
		configDefaults.user.sroot.password
	),
	role_id: null,
	description: '超级管理员',
	created_at: new Date(),
	updated_at: new Date(),
	deleted_at: null,
	role: {
		id: null,
		name: 'Sroots',
		verification_route_bypass: true,
		verification_route: [],
		verification_api_bypass: true,
		verification_api: [],
		description: '超级管理员',
		created_at: new Date(),
		updated_at: new Date(),
		deleted_at: null
	}
};

configDefaults.user.guest = {
	id: null,
	user: 'guest',
	password: null,
	role_id: null,
	description: '来宾',
	created_at: new Date(),
	updated_at: new Date(),
	deleted_at: null,
	role: {
		id: null,
		name: 'Guests',
		verification_route_bypass: configDefaults.user.guest_authority.route_bypass,
		verification_route: configDefaults.user.guest_authority.route,
		verification_api_bypass: configDefaults.user.guest_authority.api_bypass,
		verification_api: configDefaults.user.guest_authority.api,
		description: '来宾',
		created_at: new Date(),
		updated_at: new Date(),
		deleted_at: null
	}
};

delete configDefaults.user.guest_authority;



configDB.defaults(configDefaults).write();

configDB._.mixin({
	copy: function(data) {
		return JSON.parse(JSON.stringify(data));
	},
})

module.exports = configDB;