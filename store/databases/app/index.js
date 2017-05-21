var sqlite3 = require('sqlite3');

const { getPath, config } = require('../../index');

const storage = getPath(config.get('app_databases.storage').value());

var db = new sqlite3.Database(storage, function() {

});

module.exports.run = db.run;
module.exports.get = db.get;
module.exports.all = db.all;