var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	res.render('SignIn');
	//res.send('Hello');
});

router.get('/:houseId/:bookId', function(req, res){
	houseId = req.params.houseId;
	bookId = req.params.bookId;
	
	userModel.setHouseAvailabilityToZero(houseId, function(status){
		
		userModel.setBookStatusToOne(bookId, function(status){  //one for booked
		
			userModel.deleteFromBookingTable(houseId, function(status){
				
				res.redirect("/UserPendingRequest");
			});
		
		});
		
	
	});
	
});

module.exports = router;