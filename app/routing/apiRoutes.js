// A GET route with the url /api/friends to display a JSON of all possible friends.
router.get("/api/friends", function(req, res){
	connection.query("SELECT * FROM friends", function(err, data){
		if(err) throw err;
		res.send(data);
	});
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.