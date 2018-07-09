var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/:id', function(req, res){

	id = req.params.id;
	
	userModel.increaseViewCount(id, function(result){
		
	});
	
	userModel.getPostById(id, function(result){
		console.log(result);
		res.render('HouseDetails',{result : result});

	});
	
});

module.exports = router;