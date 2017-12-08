const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const mongooseUniqueValidator = require('mongoose-unique-validator');

const schema = new Schema({
	fname: { type: String, required: true },
	lname: { type: String, required: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	qOne: { type: String, required: true, unique: true  }
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', schema); //users
