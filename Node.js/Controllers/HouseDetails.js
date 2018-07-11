var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/:id', function(req, res){

	id = req.params.id;

	userModel.increaseViewCount(id, function(result){

	});

	userModel.getPostById(id, function(result){
		console.log(result);
		var signedInUser = req.session.userName;
		if(typeof signedInUser != 'undefined')
		{
			console.log("signedInUser: "+signedInUser+"   u: "+result[0].UserName);
			res.render('HouseDetails',{signedInUser: signedInUser, result : result});
		}

		else
		{
			res.render('PublicHouseDetails',{result : result});
		}

	});

});

router.get('/map/:id', function(req, res){

	id = req.params.id;
console.log("safcsvfsdvgdf");
	
	userModel.getPostById(id, function(result1){
		
		userModel.getAllAvailablePost(function(result){

		
		var signedInUser = req.session.userName;
		
		res.render("mapView", {lat: result1[0].Lat ,lng: result1[0].Lng, result: result});

	

	});


	

	});
});
module.exports = router;
