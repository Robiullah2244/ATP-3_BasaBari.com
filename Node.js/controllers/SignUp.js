var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model2');
var validationRules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator');
router.get('/', function(req, res){
	res.render('SignUp',{SignUpData:[],errs:[]});
});
router.post('/', function(req, res){

	var rules = validationRules.SignUp.insertUser;

	var data = {
    userName:req.body.userName,
		name: req.body.name,
		email: req.body.email,
    password:req.body.email
	};
  var validator=new asyncValidator(rules);
  validator.validate(data,function(errors,fields) {
    if(!errors){
      userModel.insertUser(data.userName,data.name,data.email,data.password, function(obj){
  			res.redirect('/SignIn');
  		});
    }
    else{
      res.render('SignUp',{SignUpData:data,errs:errors});
    }

  })




});

module.exports = router;
