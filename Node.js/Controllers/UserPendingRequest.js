var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	//res.render('UserPendingRequest');

	
	userModel.getAllPendingRequestInformationByUserName(req.session.userName, function(result){
		console.log(result);
		res.render("UserPendingRequest",{signedInUser : req.session.userName, result:result});

	});
	
});

module.exports = router;