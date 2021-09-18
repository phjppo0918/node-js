const mongoose = require('mongoose');
const Types = mongoose.Schema.Types;

const userSchema = mongoose.Schema({
	email: { type:String},
	password: {type:String},
	name: {type:String},
	age: {type:Number}
}, {
    versionKey: false
})

userSchema.statics.create = function(payload) {
	const user = new this(payload);
	
	return user.save();
}

userSchema.statics.findOneByEmail = (email) => this.findOne({email});

module.exports = mongoose.model('User', userSchema);