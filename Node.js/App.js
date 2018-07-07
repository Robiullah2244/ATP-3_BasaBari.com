//DECLARATION
var express = require('express');
var app=express();
var port=80;

var bodyParser = require('body-parser');
var expressSession = require('express-session');

//CONFIGURE
app.set('view engine','ejs');

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use('/Contents',express.static('Contents'));

// ROUTES
//app.use('/login', login);
app.get('/',function(req,res)
{
	res.render('publicHome');
})
app.get('/home',function(req,res)
{
	res.render('home');
})
app.get('/publicHome',function(req,res)
{
	res.render('publicHome');
})

app.get('/HouseDetails',function(req,res)
{
	res.render('HouseDetails');
})
app.get('/UserDashBoard',function(req,res)
{
	res.render('UserDashBoard');
})
app.get('/userAllPosts',function(req,res)
{
	res.render('userAllPosts');
})
app.get('/userPosts',function(req,res)
{
	res.render('userPosts');
})
app.get('/userProfile',function(req,res)
{
	res.render('userProfile');
})
//SERVER START
app.listen(port,function() {
  console.log('Server started');
})
