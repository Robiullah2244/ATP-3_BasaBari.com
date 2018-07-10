var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

	
	userModel.getUserByUserName(req.session.userName, function(result){
		console.log(result);
		res.render("UserProfile",{signedInUser : req.session.userName, result:result});

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