var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model2');
var str=[];
var q=[];
var i=0;
var j=0;
var k=0;
// str[0]=1111111111111111;
function contains(x) {
  str.forEach(function(item) {

    if(item ==x.toString()){
              k=0;
                  console.log(item);
        return true;
    }
    k++;
  })
  if(str.length==k-1){
    k=0;
    return false;
  }
}
router.get('/', function(req, res){
  userName=req.session.userName;
  userModel.getAllContactListByUserName(userNames,function(result){
    result.forEach(function (item) {
      if(contains(item.conversionNumber)==true){
        //console.log("False");
        //In the aray
      }else{
        q[j++]=item;
        str[i++]=item.conversionNumber.toString();
      }

    });
        console.log(str);
    res.render('contactList',{result:result,userName:userName});
  });
});

module.exports = router;
