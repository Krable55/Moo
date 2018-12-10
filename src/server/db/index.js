var mysql = require('mysql');
var Sequelize = require('sequelize');

var db = new Sequelize('moo', 'root', '', {
	host: 'localhost',
  dialect: 'mysql'
});


var Cow = db.define('cow', {
  name: Sequelize.STRING,
  description: Sequelize.STRING
});


// var connection = mysql.createConnection({
//   user: 'root',
//   password: '',
//   database: 'Moo'
// });

// connection.connect((err) =>{
// 	if(err ){throw err}
// 	 else{console.log('Connected to database')}
// });Cow

// module.exports = connection;
Cow.sync()
  .then(function() {
    // Now instantiate an object and save it:
    return Cow.create({name: 'Bessie', description: 'A nice cow with a generic name'});
  })
  .then(function() {
    // Now instantiate an object and save it:
    return Cow.create({name: 'Buttercup', description: 'A yellow cow'});
  })
  .then(function() {
    // Retrieve objects from the database:
    return Cow.findAll({ where: {name: 'Bessie'} });
  })

  .catch(function(err) {
    // Handle any error in the chain
    console.error(err);
    db.close();
  });