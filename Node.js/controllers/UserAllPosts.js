var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model2');
router.get('/', function(req, res){
  // res.render('SignUp',{SignUpData:[],errs:[]});
  // req.session.userName='tanim';
    var userName =req.session.userName;
  userModel.getAllPostByUserName(userName,function(result){
    console.log(result);
  	res.render('UserAllPosts',{userAllPosts:result});
  });
});
module.exports=router;
