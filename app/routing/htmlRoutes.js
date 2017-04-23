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
router.post('/', function(req, res){
	console.log(req.body);

	let name = req.body.name;
	let photo = req.body.phoneNumber;
	let Q1 = req.body.Q1;
	let Q2 = req.body.Q2;
	let Q3 = req.body.Q3;
	let Q4 = req.body.Q4;
	let Q5 = req.body.Q5;
	let Q6 = req.body.Q6;
	let Q7 = req.body.Q7;
	let Q8 = req.body.Q8;
	let Q9 = req.body.Q9;
	let Q10 = req.body.Q10;
	

	connection.query('INSERT INTO friends(name, photo, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10)', [name, photo, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10]);

	res.redirect('/'); //THIS NEEDS TO CHANGE TO THE RESULTS PAGE!
});

module.exports = router;