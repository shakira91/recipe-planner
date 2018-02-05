const express = require('express');
const router = express.Router();

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
		if (user.recipes === null) {
			res.status(200).json({
				message: 'User Added'
			})
		} else {
			res.status(200).json({
				message: 'Success',
				recipes: user.recipes
			})
		}
	});
});

module.exports = router;