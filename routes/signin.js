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
		if (!bycrypt.compareSync(req.body.password, user.password)){
			return res.status(401).json({
				title: 'Log in failed',
				error: {message: 'Log in failed'}
			});
		}
		var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
		res.status(200).json({
			message: 'Succes',
			token: token,
			userId: user._id
		})
	});
});

module.exports = router;