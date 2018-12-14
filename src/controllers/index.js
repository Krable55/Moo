var models = require('../models');
var db = require('../server/db');

module.exports = {
	allInfo: {
		get: function(req, res){
			console.log('GET COW CALLED');
		db.Cow.findAll()
		.then(function(names){
			res.json(names);
		})
	 },
	 post: function(req, res){
	 	console.log('POST COW CALLED');
	 	db.Cow.findOrCreate({where: {name: req.body.name}})
	 	 .spread(function(cow, created) {
          db.Cow.create({
            name: req.body.name,
            description: req.body.description
          }).then(function(message) {
            res.sendStatus(201);
          });
        });
	 }

	},
	page: {
		get: function(req, res){
			res.location('../../index.html')
		}
	}

}