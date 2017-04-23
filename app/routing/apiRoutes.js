// A GET route with the url /api/friends to display a JSON of all possible friends.
router.get("/api/friends", function(req, res){
	connection.query("SELECT * FROM friends", function(err, data){
		if(err) throw err;
		res.send(data);
	});
});

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
router.post('/reserve', function(req, res){
	console.log(req.body);

	let name = req.body.name;
	let phoneNumber = req.body.phoneNumber;
	let email = req.body.email;
	let startTime = req.body.startTime;
	let partySize = req.body.partySize;

	connection.query('INSERT INTO reservations(name, phoneNumber, email, startTime, partySize) VALUES(?,?,?,?,?)', [name, phoneNumber, email, startTime, partySize]);

	res.redirect('/tables');
});

module.exports = router;