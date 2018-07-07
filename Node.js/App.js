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

// ROUTES
app.use('/login', login);

//SERVER START
app.listen(port,function() {
  console.log('Server started');
})
