var express = require('express');
var mongojs = require('mongojs');
var router = express.Router();

var db = mongojs('node', ['user']);

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
	db.user.find(function (error, data) {
		res.send(data);
	});
});*/

router.get('/', (req,res,next) =>
		   db.user.find((error, data) => 
						res.send(data) ));

module.exports = router;