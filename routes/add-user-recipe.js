const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res, next) => {
	User.findByIdAndUpdate(req.body.userId, 		
		{
			"$push": {
			  recipes: [ req.body.formData.title, req.body.formData.ingredients ],
			}
		},(err, user) => {
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
		user.save(function(err, result) {
		if (err) {
			return res.status(500).json({
				title: 'An error occured',
				error: err.message
			})
		}
		res.status(200).json({
			message: 'Updated',
			index: req.body.index
		});
		
	});

 });

});

module.exports = router;