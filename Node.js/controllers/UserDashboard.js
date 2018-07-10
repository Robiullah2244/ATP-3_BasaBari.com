var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model2');
router.get('/', function(req, res){
  // res.render('SignUp',{SignUpData:[],errs:[]});
    var userName ='tanim';//req.session.userName;
  userModel.getNumberOfPostByUserName(userName,function(result){
  	res.render('UserDashBoard',{numberOfPost:result[0].numberOfPost});
  });
});
module.exports=router;
