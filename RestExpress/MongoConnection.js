
var mongoose = require('mongoose');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', 
		() => console.log('connected to mongod server');
)

module.exports = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/node',
					 (err) => 
					 if(err){console.log('mongodb connection err');
           console.log(err)});
};