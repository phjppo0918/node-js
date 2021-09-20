const User = require('../models/User.js');

const crypto = require('crypto');
let shasum;
module.exports = {
	save: async function(params) {
		try {
			shasum = crypto.createHash('sha256');
			params.password = shasum.digest(params.password);
			let result = await User.create(params);
			return result.id;
		} catch(err) {
			if(err.code === 11000) throw 'Duplicated Key Error: "serviceNumber" is unique';
			throw err;
		}
	},
	
	findAll: async function() {
		return await User.findAll();
	},
	
	findById: async function(id) {		
		let result = await User.findById(id);

		if(!result) {
			throw new Error('not found');
		}

		return result;
	},

	auth: async function(params) {
		try {
			console.log('service'+ params.serviceNumber);
			shasum = crypto.createHash('sha256');
			params.password = shasum.digest(params.password);
			console.log('pw: '+params.password);
			const loginUser = await User.findOneByServiceNumber(params.serviceNumber);
			console.log('loging User' + loginUser);

			if(!loginUser) {
				throw new Error('user not found');
			}
			
			if(loginUser.password != params.password) {
				console.log('not match');
				throw new Error('Passwords do not match');
			}

			return true;
		}catch(error){
			
		}
	}
};