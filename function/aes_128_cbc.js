
var crypto = require('crypto');


//加密
function encrypt(key, buf) {
	var encrypted = "";
	var cip = crypto.createCipher('aes-128-cbc', key);
	encrypted += cip.update(buf, 'utf8', 'hex');
	encrypted += cip.final('hex');

	return encrypted;
}

//解密
function decrypt(key, encrypted) {
	var decrypted = "";
	var decipher = crypto.createDecipher('aes-128-cbc', key);
	decrypted += decipher.update(encrypted, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	return decrypted
}


module.exports.encrypt = encrypt;
module.exports.decrypt = decrypt;