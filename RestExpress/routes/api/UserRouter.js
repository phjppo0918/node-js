const express = require('express');
const router = express.Router();
const UserService = require('../../model/UserService')

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
	db.user.find(function (error, data) {
		res.send(data);
	});
});*/

router.post('', (req, res) => {
	UserService.create(req.body)
		.then(re => {console.log(re);
					res.send(re);});
});

module.exports = router;