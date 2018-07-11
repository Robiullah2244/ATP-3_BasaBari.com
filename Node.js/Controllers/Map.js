var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

		res.render("map");

	
});

router.get('/map/:l', function(req, res){
	
	userModel.addHouseLatLngInHouseInformationTable(userName,function(result){
		
    	res.render('UserDashBoard',{arr,signedInUser: userName, numberOfPost:result[0].numberOfPost});
		res.redirect("/map/");
		
    });
	
});

module.exports = router;