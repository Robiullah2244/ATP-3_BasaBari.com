var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

	userModel.getAllAvailablePost(function(result){
		
		res.render('publichome',{result : result});

	});
	
});

module.exports = router;