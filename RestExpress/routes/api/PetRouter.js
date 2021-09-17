const express = require('express');
const router = express.Router();
const PetService = require('../../model/PetService')

router.get('', (req, res) => {
   PetService.findAll().then(re => res.send(re));
});

module.exports = router;