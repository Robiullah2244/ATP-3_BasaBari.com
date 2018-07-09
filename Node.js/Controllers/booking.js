var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/:id', function(req, res){

	if(req.session.userName)
	{
		id = req.params.id;
		var postUserName;
		var bookUserName = req.session.userName;
		var retrivePostUser= function(callback){userModel.getPostUserByHouseId(id, function(result)
		{
			postUserName = result[0].UserName;
			console.log(postUserName);
			callback();
			
		})};
		console.log(postUserName);
		console.log(id);
		var insertIntoBookingTable = function(){userModel.booking(id, postUserName, bookUserName, function(result)
		{
			console.log(result);
			console.log(postUserName);
			res.redirect('/home');

		})};
		
		retrivePostUser(insertIntoBookingTable);
	}
	
	else
	{
		res.redirect('/home/'+id);
	}
	
	
});

module.exports = router;