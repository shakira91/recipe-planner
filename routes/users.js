const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', function(req, res, next) {
	var user = new User({
		fname: req.body.fname,
		lname: req.body.lname,
		username: req.body.username,
		password: req.body.password,
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
		res.status(201).json({
			message: 'user saved',
			obj: result
		})
	});
});

module.exports = router;