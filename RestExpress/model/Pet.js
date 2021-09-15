const mongoose = require('mongoose');
const Types = mongoose.Schema.Types

const pet = mongoose.Schema({

    name: { type: String },
    greed: { type: String },
    age: { type: Number }  
});


module.exports = mongoose.model('Pet', pet);