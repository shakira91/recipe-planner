const express = require('express');
const router = express.Router();
const multer = require('multer');
var upload = multer({ dest: 'uploads/' })

const User = require('../models/user');

router.post('/', (req, res, next) => {

	User.findByIdAndUpdate(req.body.userId, 		
		{
			"$push": {
			  recipes: [ req.body.image, req.body.formData.title, req.body.formData.ingredients ],
			}
		},(err, user) => {

			var upload = multer().single('avatar')
		
			  upload(req, res, function (err) {
				if (err) {
				  // An error occurred when uploading
				  return
				}
			
				// Everything went fine
			  })
		
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