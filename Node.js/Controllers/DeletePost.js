var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	res.render('SignIn');
	//res.send('Hello');
});

router.get('/:houseId/:userName', function(req, res){
	houseId = req.params.houseId;
	userName = req.params.userName;
	
	if(req.session.userName.toLowerCase() == userName.toLowerCase())
	{
		userModel.deleteFromHouseInformationByHouseId(houseId, function(status){
		
			userModel.deleteBookingByHouseId(houseId, function(status){  //only delete pending request
			
				res.redirect("/home");
				
			
			});
			
		
		});
	}
	else
	{
		res.send("You can Delete only your post...... :)")
	}
	
	
	
});

module.exports = router;