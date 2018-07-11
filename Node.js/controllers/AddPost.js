var express = require('express');
var router = express.Router();
var multer = require('multer');
var datetime = require('node-datetime');
var dt = datetime.create();
var formatted = dt.format('m_d_YH_M_S');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './contents/image/House')
  },
  filename: function(req, file, cb) {
    // cb(null, "req.session.userName" + "." + file.mimetype.substring(6));
    cb(null, formatted.toString() + "." + file.mimetype.substring(6));

  }
})

var upload = multer({
  storage: storage
});
// var upload = multer({ dest: './contents/image/House' })
var userModel = require.main.require('./models/user-model2');
var validationRules = require.main.require('./validation_rules/rules');

// console.log(x.toISOString()+"outside");
var asyncValidator = require('async-validator');
router.get('/', function(req, res) {
  res.render('AddPost', {signedInUser : req.session.userName,
    PostData: [],
    errs: []
  });
  // res.render('SignUp',{SignUpData:[],errs:[]});
});
router.post('/', upload.single('houseImage'), function(req, res) {

  var rules = validationRules.AddPost;
  // console.log(req.file);
  // console.log(x+"inside");
  var userName =req.session.userName;
  console.log(req.file);
  var houseImageName=formatted.toString() + "." + req.file.mimetype.substring(6);
  var nowDate = datetime.create();
  var postDate = dt.format('Y-m-d');
  var data = {
    houseName:req.body.houseName,
    mobileNo:req.body.mobileNo,
    location: req.body.location,
    holdingNumber: req.body.holdingNumber,
    rent: req.body.rent,
    houseType: req.body.houseType,
    bedroom: req.body.bedroom,
    bathroom: req.body.bathroom,
    balcony: req.body.balcony,
    drawingroom: req.body.drawingroom,
    diningroom: req.body.diningroom,
    lift: req.body.lift,
    gas: req.body.gas,
    generator: req.body.generator,
    parking: req.body.parking,
    internet: req.body.internet,
    intercom: req.body.intercom,
    houseImageName,postDate,userName,
    area:req.body.area,specialNote:req.body.specialNote,
	lat: req.body.myLat,
	lng: req.body.myLng,

  };
  var validator = new asyncValidator(rules);
  validator.validate(data, function(errors, fields) {
    if (!errors) {
      // userModel.getMaxHouseInformationId(function(result){
      //   var x=result[0].maxID+1;
      //   console.log(x);
      // });
        userModel.addPostToDb(userName,data,function(obj)
        {
          console.log(data);
          res.redirect('/home');
        });
    }
    else {
      // res.render('SignUp',{SignUpData:data,errs:errors});
      console.log(data);
      res.render('AddPost', {signedInUser: req.session.userName, PostData: data,errs: errors});
    }
  })




});

module.exports = router;
