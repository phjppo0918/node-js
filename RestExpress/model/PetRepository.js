var mongoose = require('mongoose');
const petSechma = require('./Pet');
var pet = mongoose.model('Pet', petSechma);

var petRepository = 