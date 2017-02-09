var data = require("../data.json");

exports.addFriend = function(req, res) {    

	var name = req.query.name;
    var description = req.query.description;
    var imgURL = 'http://lorempixel.com/300/300/people';
    data["friends"].push({name: name, description: description, imageURL: imgURL});
	res.render('add'); 

 }