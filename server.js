 // server.js

//modules --------
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var db = require('./config/db.js');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// configuration -------------


//set port 
var port = process.env.PORT || 3000;


// connect to our mongoDB database
// uncomment after you enter in your own cridentials in congfig/db.js
mongoose.connect('mongodb://localhost/clicker');

// get all data/stuff of the body (POST) parameters 
// parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));


// override with the X-HTTP-Method-Override header in the request. simulated DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//set the static files location /public/img will be /img for users
app.use(express.static(__dirname +'/public'));

// routes ------
require('./app/routes')(app); //configure our routes


//Start app----------------

//startup our app at http://localhost;3000
app.listen(port);


//shoutout to the user
console.log('Server running on port: ' + port);

//expose app
exports = module.exports = app;

