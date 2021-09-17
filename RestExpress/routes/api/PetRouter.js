const express = require('express');
const router = express.Router();
const PetService = require('../../model/PetService')

router.get('', (req, res) => {
   PetService.findAll()
	   .then(re => res.send(re));
});

router.get('/:id', (req, res) => {
   PetService.findById(req.params.id)
	   .then(re => res.send(re));
});

router.post('', (req, res) => {
	PetService.save(req.body)
		.then(re => {console.log(re);
					res.send(re);});
});

module.exports = router;