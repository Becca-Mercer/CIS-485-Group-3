var User = require("./app/models/UserSchema");
var bson = require("./node_modules/bson");

var user = new User({
	email: 'test@test.com',
	first_name: 'John',
	last_name: 'Doe', 
	password: 'test',
	university: 'CSU',
	university_id: 12345679
});


console.log('Email: ' + user['email']);
console.log('first name: ' + user['first_name']);


user.save(function(err){
	if(err) throw err; 

console.log('User saved');
});
