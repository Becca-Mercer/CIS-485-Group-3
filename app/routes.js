// app/routes.js

//grap the nerd model we just created 
var Nerd = require('./models/nerd');

module.exports=function (app){
	// server routes ------------------------
	// handle thing like api calls 
	// authentication routes 

	//sample api route 
	app.get('/api/nerds', function(req, res){
		Nerd.find(function(err,nerds){
		
		//if there is an error retriving, send the err
		// nothing after res.send(err) will execute 

		if(err)
			res.send(err);

		res.json(nerds);

		});

	});

// route to handle creating goes here app.post 

// route to handle deleting goes here (app.delete)


//frontend routes ------------------
//route to handle all angular requests 
	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});

};
