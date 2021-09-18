const express = require('express');
const router = express.Router();

const UserService = require('../../model/UserService')

router.post('/login', (req, res) => {
	var result;
	UserService.auth(req.body)
		.then(re => {
			if(re=='success') {
				req.session.loginData = req.body.email;
				req.session.save(e => {if(e) console.log(e)});
			}
			res.send(re);
		});
});


module.exports = router;
