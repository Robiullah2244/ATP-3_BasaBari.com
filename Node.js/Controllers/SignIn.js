var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');
router.get('/', function(req, res){
	res.render('SignIn');
	//res.send('Hello');
});

router.post('/', function(req, res){
	var un = req.body.userName;
	var ps = req.body.password;
	console.log(ps);
	userModel.validateUser(un, ps, function(status){
		console.log(status);
		
		if(status)
		{
			req.session.userName = un;
			res.redirect('/home');
		}
		else
		{
			 var error = {error: "Invalid User Name or Password"};
			 res.render('SignIn',error);
		}
		
		// if(!status)
		// {
			// var error = {error: "Invalid User Name or Password"};
			// res.render('SignIn',error);
			
		// }
		// else
		// {
			// req.session.userName = un;
			// console.log(req.session.userName+"session check"+un);
			//req.session.userType = result.type;
			//console.log('sds');
			// res.redirect('/home');
		// }
	});
	
});

module.exports = router;