const express = require('express');
const router = express.Router();

const User = require('../models/user');
var count = 0;

// router.get('/', function(req, res, next){
// 	user.find();

// });

router.post('/', (req, res) => {
    User.findByIdAndUpdate(req.body.userId, 
    	{ "$push": { 'recipes' : [req.body.image, req.body.title, req.body.ingredients]} }, 
    	{ "new": true, "upsert": true },(err, user) => {
        console.log(user);
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
			count: count++
		});
		
	});

 });
		


});


module.exports = router;