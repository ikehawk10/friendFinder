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