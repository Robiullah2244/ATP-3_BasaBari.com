var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
	//res.render('UserPendingRequest');

	
	userModel.getAllApprovedRequestInformationByUserName(req.session.userName, function(result){
		console.log(result);
		res.render("UserApprovedRequest",{result:result});

	});
	
});

module.exports = router;