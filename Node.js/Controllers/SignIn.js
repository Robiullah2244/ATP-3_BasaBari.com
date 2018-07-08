var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	res.render('SignIn');
	//res.send('Hello');
});

router.post('/', function(req, res){
	var un = req.body.username;
	var ps = req.body.password;
	userModel.validateUser(un, ps, function(status){
		console.log(status);
		if(status)
		{
			//req.session.username = un;
			res.redirect('/home');
		}
		else
		{
			var error = {error: "Invalid User Name or Password"};
			res.render('SignIn',error);
		}
	});
	
});

module.exports = router;