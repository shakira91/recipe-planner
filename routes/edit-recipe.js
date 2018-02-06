const express = require('express');
const router = express.Router();

const User = require('../models/user');

// router.get('/', function(req, res, next){
// 	user.find();

// });

router.post('/', (req, res) => {
    User.findByIdAndUpdate(req.body.userId, 
    	{
            "$unset"  : user.recipes[req.body.index],
            "$set": user.recipes[req.body.index] = req.body.formData,  
        },(err, user) => {
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
			message: 'Updated'
		});
		
	});

 });

});

module.exports = router;