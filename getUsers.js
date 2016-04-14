var User = require('./app/models/UserSchema.js');

User.find({},function(err,users){
if (err) throw err;
console.log('Everything in users' + users);
});
