var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

	userModel.getAllAvailablePost(function(result){
		
		req.session.houseInformation = result;
		res.render('home',{signedInUser : req.session.userName,  result : result});
		
		
	});
	
});

module.exports = router;