var data = require("../data.json");

exports.addFriend = function(req, res) {   


	var newFriend = {
		"name": req.query.name,
		"description": req.query.description,
		"imageURL": "lorempixel.com/400/400/people"		
	};

	data["friends"].push(newFriend);

	res.render("add");
}


