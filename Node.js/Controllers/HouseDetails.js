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
			res.render('HouseDetails',{result : result, signedInUser: signedInUser});
		}
		else
		{
			res.render('PublicHouseDetails',{result : result});
		}

	});
	
});

module.exports = router;