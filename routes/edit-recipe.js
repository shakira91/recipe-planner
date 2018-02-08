const express = require('express');
const router = express.Router();

const User = require('../models/user');

// router.get('/', function(req, res, next){
// 	user.find();

// });

router.post('/', (req, res) => {
    User.findByIdAndUpdate(req.body.userId, 
    	{
			 "$set": { ['recipes'[req.body.index][0]] : [req.body.image] },
			 "$set": { ['recipes'[req.body.index][1]] : [req.body.formData.title] },
			 "$set": { ['recipes'[req.body.index][2]] : [req.body.formData.ingredients] }
        },(err, user) => {
        console.log(user.recipes[req.body.index][2]);
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
			message: 'Updated'
		});
		
	});

 });

});

module.exports = router;