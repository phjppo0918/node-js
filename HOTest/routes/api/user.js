
const express = require('express');
const router = express.Router();
const userService = require('../../services/userService.js');
const userController = require('../../controllers/userController.js');

router.post('', (req, res) =>{
	console.log(req.body);
	userController.saveUser(req, res);
}
			);

/*
router.post('', (req, res) => {
    userService.save(req.body)
        .then(result => res.send(result), result => res.send(result));
});
*/

router.get('', (req, res) => {
    userService.findAll()
        .then(result => res.send(result));
});

router.get('/:id', (req, res) => {
    userService.findAll(req.params.id)
        .then(result => res.send(result));
});

module.exports = router;