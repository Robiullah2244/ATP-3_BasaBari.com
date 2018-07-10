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
<<<<<<< HEAD
			console.log("signedInUser: "+signedInUser+"   u: "+result[0].UserName);
			res.render('HouseDetails',{signedInUser: signedInUser, result : result});
=======
			res.render('HouseDetails',{result : result, signedInUser: signedInUser});
>>>>>>> 48511c2152569afd9ed4dae3a71c44175b2f6add
		}
		else
		{
			res.render('PublicHouseDetails',{result : result});
		}

	});

});

module.exports = router;
