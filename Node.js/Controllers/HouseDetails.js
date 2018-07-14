var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/:id', function(req, res){

	id = req.params.id;
	console.log("robi");

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
	
	userModel.getPostById(id, function(result1){
		console.log(result1);
		userModel.getAllAvailablePostWithOutThis(result1[0].Id, function(result){

		console.log(result);
		var signedInUser = req.session.userName;
		
		res.render("mapView", {lat: result1[0].Lat ,lng: result1[0].Lng,rent:result1[0].Rent,bed:result1[0].BedRoom,bath:result1[0].BathRoom, result: result});

	

	});


	

	});
});
module.exports = router;
