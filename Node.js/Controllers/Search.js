var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/SearchByLocation/:value', function(req, res){

	value = req.params.value;
	userModel.getAllAvailableSearchedPost(value, function(result){
		
		console.log(result);
		

	});
	
});

module.exports = router;