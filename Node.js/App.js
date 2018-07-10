//DECLARATION
var express = require('express');
var app=express();
var port=1995;

var bodyParser = require('body-parser');
var expressSession = require('express-session');




var signIn = require('./controllers/SignIn');
var signOut = require('./controllers/SignOut');
var publicHome = require('./controllers/PublicHome');
var home = require('./controllers/Home');
var houseDetails = require('./controllers/HouseDetails');
var booking = require('./controllers/Booking');
var userPendingRequest = require('./controllers/UserPendingRequest');
var approve = require('./controllers/approve');
var userProfile = require('./controllers/userProfile');
var userApprovedRequest = require('./controllers/UserApprovedRequest');
var deletePost = require('./controllers/DeletePost');



// var home = require('/controllers/home');

var signUp = require('./Controllers/SignUp');
var addPost = require('./Controllers/AddPost');
var userDashboard=require('./Controllers/userDashboard');
var userAllPosts=require('./Controllers/userAllPosts');


//CONFIGURE
app.set('view engine','ejs');

//MIDDLEWARES
app.use(bodyParser.urlencoded({extended:false}));
app.use('/Contents',express.static('Contents'));
app.use(expressSession({secret: 'my top secret pass', saveUninitialized: true, resave: true}));




app.use('/signUp',signUp);
app.use('/addPost',addPost);
app.use('/userDashboard',userDashboard);
app.use('/userAllPosts',userAllPosts);
// app.get('/addpost',function(req,res)
// {
// 	res.render('addpost');
// })
// app.get('/UserDashBoard',function(req,res)
// {
// 	res.render('UserDashBoard');
// })

app.use('/houseDetails', houseDetails);
app.use('/booking', booking);

app.use('*', function(req, res, next){
	console.log("Original Url: "+req.originalUrl);
	url= req.originalUrl.toLowerCase();
	if(url == '/signin' || url == '/favicon.ico/' || url == '/signout' || url == '/publichome')
	{
		console.log("req.session.t");
		next();
	}
	else
	{

		console.log("sd");
		if(!req.session.userName)
		{
			console.log(req.session.username);
			res.redirect('/signIn');
			return;
		}
		else
		{
			next();
		}

	}
});

// ROUTES
//app.use('/login', login);


app.use('/signIn', signIn);

app.use('/signOut', signOut);
app.use('/publichome', publicHome);
app.use('/home', home);
app.use('/userPendingRequest', userPendingRequest);
app.use('/approve', approve);
app.use('/userProfile', userProfile);
app.use('/UserApprovedRequest', userApprovedRequest);
app.use('/DeletePost', deletePost);




// app.use('/logout', logout);
// app.use('/home', home);




app.get('/',function(req,res)
{

		res.render('Home');

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
app.get('/userAccountStatement',function(req,res)
{
	res.render('userAccountStatement');
})
app.get('/Messenger',function(req,res)
{
	res.render('Messenger');
})
app.get('/addpost',function(req,res)
{
	res.render('addpost');
})
app.get('/userSettings',function(req,res)
{
	res.render('userSettings');
})
app.get('/signin',function(req,res)
{
	res.render('signin');
})
// app.get('/signup',function(req,res)
// {
// 	res.render('signup');
// })

app.get('/UserBalanceReport',function(req,res)
{
	res.render('UserBalanceReport');
})

//SERVER START
app.listen(port,function() {
  console.log('Server started');
})
