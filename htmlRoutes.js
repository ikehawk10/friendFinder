//Set dependencies 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');
const router = express.Router();

//Declare configurations for our database
const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'friendFinder'
});

//Connect to our Database
connection.connect();


//Send home.html when home route is hit
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
});

//GET Route to /survey which displays the survey page.
router.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// A default USE route that leads to home.html which displays the home page.
//this is in the server.js file!!! 



// ------------------------- apiRoutes.js ------------------------------------------------------------- //

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