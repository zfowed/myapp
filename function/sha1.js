const crypto = require('crypto');

module.exports = function (key, string) {
	return crypto.createHmac('sha1', `${key}`).update(`${string}`).digest().toString('base64');
}