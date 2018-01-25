const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

// router.get('/', function(req, res, next){
// 	user.find();

// });

router.post('/', function(req, res, next) {
	User.findOne({ username: req.body.username }, 
		function(err, user) {
			console.log(user)
		if (err) {
			return res.status(401).json({
				title: 'An error occured',
				error: err.message
			});
		}
		if (!user) {
			return res.status(401).json({
				title: 'Log in failed',
				error: {message: 'Log in failed'}
			});
		}
		if (!bcrypt.compare(req.body.password, user.password)){
			return res.status(401).json({
				title: 'Log in failed',
				error: {message: 'Log in failed'}
			});
		}
		var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
		res.status(200).json({
			message: 'Success',
			token: token,
			cuisine: user.qOne,
			userId: user._id,
			recipes: user.recipes
		})
	});
});

		




module.exports = router;