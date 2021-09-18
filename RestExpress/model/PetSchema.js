const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

const petSchema = mongoose.Schema({

    name: { type: String },
    greed: { type: String },
    age: { type: Number }  
});


petSchema.statics.create = function(payload) {
    const pet = new this(payload);

    // return Promise
    return pet.save();
};

petSchema.statics.findAll = function() {
	return this.find({});
}
petSchema.statics.findOneById = (id) => this.findOne({id});


module.exports = mongoose.model('Pet', petSchema);