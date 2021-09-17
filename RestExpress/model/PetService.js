const petSchema = require('./PetSchema.js')
async function findAll() {
	var result;
	await petSchema.findAll().then(rs => result = rs);
	return result;
}

async function findById(id) {
	var result;
	await petSchema.findById(id).then(rs => result = rs);
	return result;
}

async function save(params){
	var result;
	await petSchema.create(params).then(rs => result = rs.id);
	return result;
}

module.exports.findAll = findAll;
module.exports.findById = findById;
module.exports.save = save;