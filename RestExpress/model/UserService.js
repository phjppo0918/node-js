const userSchema = require('./UserSchema.js');
var crypto = require('crypto');
var shasum = crypto.createHash('sha256');

async function create(params) {
	var result;
	params.password = shasum.digest(params.password);
	await userSchema.create(params).then(rs => result = rs);
	return result;
}

async function auth(params) {
	params.password = shasum.digest(params.password);
	var result = 'fail';
	try{
		console.log(params.email);
		await userSchema.findOneByEmail(params.email).then(re => 
												 {
		console.log(re);
		if(re.password == params.password) {
		result = 'success';
		}
		});
	}catch(e) {
		console.log(e);
	}
	
	
	return result;
}

module.exports.create = create;
module.exports.auth = auth;