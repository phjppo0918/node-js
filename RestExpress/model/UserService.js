const userSchema = require('./UserSchema.js');
var crypto = require('crypto');
var shasum = crypto.createHash('sha256');
async function create(params) {
	var result;
	params.password = shasum.digest(params.password);
	await userSchema.create(params).then(rs => result = rs);
	return result;
}

module.exports.create = create;