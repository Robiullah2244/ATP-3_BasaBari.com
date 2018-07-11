var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/SearchByLocation/:value', function(req, res){

	value = req.params.value;
	userModel.getAllAvailableSearchedPostBySearchBySearchByLocation(value, function(result){
		
		console.log(result);
		if(typeof req.session.userName!= 'undefined')
		{
			res.render("home", {signedInUser:req.session.userName, result:result});
		}
		else
		{
			res.render("publichome", {result:result});
		}
		
		

	});
});
	
router.get('/SearchByNoOfBedRoom/:value', function(req, res){

	value = req.params.value;
	userModel.getAllAvailableSearchedPostByNoOfBedRoom(value, function(result){
		
		console.log(result);
		if(typeof req.session.userName!= 'undefined')
		{
			res.render("home", {signedInUser:req.session.userName, result:result});
		}
		else
		{
			res.render("publichome", {result:result});
		}
		

	});
	
});

module.exports = router;