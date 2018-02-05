const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// router.get('/', function(req, res, next){
// 	user.find();

// });

router.post('/', function(req, res, next) {
	var user = new User({
		fname: req.body.fname,
		lname: req.body.lname,
		username: req.body.username,
		password: bcrypt.hashSync(req.body.password, 10),
		email: req.body.email,
		qOne: req.body.qOne
	});
	user.save(function(err, result) {
		if (err) {
			return res.status(500).json({
				title: 'An error occured',
				error: err.message
			})
		}
		var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
		res.status(200).json({
			message: 'Success',
			token: token,
			cuisine: user.qOne,
			userId: user._id,
			recipes: user.recipes
		});
		
	});

});


module.exports = router;