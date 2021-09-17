const petSchema = require('./PetSchema.js')
async function findAll() {
	var result;
	await petSchema.findAll().then(
		rs => {
			console.log("service - "+rs);
			result = rs;}
	);
	return result;
}

module.exports.findAll = findAll;