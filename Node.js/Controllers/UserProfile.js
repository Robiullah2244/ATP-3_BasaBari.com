var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

	
	userModel.getUserByUserName(req.session.userName, function(result){
		userModel.getPostByUserName(req.session.userName, function(posts){
			console.log(result);
			console.log(posts);
			res.render("UserProfile",{signedInUser : req.session.userName, result:result, posts : posts});
			

		});

	});
	
});

router.get('/:userName', function(req, res){

	userName = req.params.userName;
	
	userModel.getUserByUserName(userName, function(result){
		console.log(result);
		res.render("UserProfileFromAnotherUser",{signedInUser : req.session.userName, result:result});

	});
	
});

module.exports = router;