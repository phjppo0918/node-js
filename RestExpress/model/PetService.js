var petRepository = require('./PetRepository');

function findAll() {
	return petRepository.findAll();
}

module.exports.findAll = findAll;