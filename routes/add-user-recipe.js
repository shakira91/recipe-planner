const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');



const User = require('../models/user');

router.post('/', (req, res, next) => {
	const storage = multer({ 
		dest: 'uploads/',
		filename: function(req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
		}
	});
	console.log()
	const upload = multer({
		storage: storage
	}).single('image');
	User.findByIdAndUpdate(req.body.userId, 		
		{
			"$push": {
			  recipes: [ req.body.image, req.body.formData.title, req.body.formData.ingredients ],
			}
		},(err, user) => {
		upload(req, res, (err)=>{
			if(err){
				return res.status(401).json({
					error: {message: 'Log in failed'}
				});
			} else {
				console.log(req.file)
			}
		});
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