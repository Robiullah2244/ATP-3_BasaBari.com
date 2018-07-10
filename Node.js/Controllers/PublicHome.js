var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){

	userModel.getAllAvailablePost(function(result){
		
		if(typeof req.session.userName == 'undefined')
		{
			res.render('publichome',{result : result});
		}
		else
			res.redirect('/home');
		

	});
	
});

module.exports = router;