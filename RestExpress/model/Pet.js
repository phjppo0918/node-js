const mongoose = require('mongoose');
const Types = mongoose.Schema.Types

const petSchema = mongoose.Schema({

    name: { type: String },
	// 직위
    greed: { type: String },
    // 계급
    age: { type: Number }  
});


module.exports = mongoose.model('Pet', petSchema);