var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model2');
  var arr=[];
  var i=0;
router.get('/', function(req, res){
  // res.render('SignUp',{SignUpData:[],errs:[]});
    var userName =req.session.userName;
    var popularLocation=["Banani","Bashundhar","Nikunjo","Dhanmondi","Glushan","Uttara","Khilgaon","Mirpur","Farmgate"]
    // console.log(req.session.userName+"Session userName");
  // userModel.getNumberOfPostByUserName(userName,function(result){
  // 	res.render('UserDashBoard',{n:m,signedInUser: userName, numberOfPost:result[0].numberOfPost});
  // });

  popularLocation.forEach (function(item) {
    userModel.getNumberOfPostByLocation(item, function(result) {
      // console.log(popularLocation[i]);
      arr[i++] = result[0].NumberOfPostByLocation;

    })
  });
    userModel.getNumberOfPostByUserName(userName,function(result){
    	res.render('UserDashBoard',{arr,signedInUser: userName, numberOfPost:result[0].numberOfPost});
    });

});
module.exports=router;
