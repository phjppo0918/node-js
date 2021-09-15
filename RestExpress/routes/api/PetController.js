const express = require('express');
const router = express.Router();
const PetService = require('../../model/PetService')

router.get('', (req, res) => {
   res.send(PetService.findAll());
});

module.exports = router;