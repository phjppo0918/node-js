const pet = require('./Pet');

async function findAll() {
		return await Promise.resolve(pet.find());
}

module.exports.findAll = findAll;



