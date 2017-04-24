//set dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

//serve up public folder and all content as static files from server to client.
//app.use(express.static(path.join(__dirname,'app/public'))); //not sure why this is needed or if itll work

//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
  extended: false
}));

//Import htmlRoutes.js and use this for all routing.
var routes = require('./htmlRoutes.js');
app.use('/', routes);  // A default USE route that leads to home.html which displays the home page.


//Ternary operator. If process.env.port is undefined, we use 8000. In either case, log result.
app.listen(process.env.PORT || 8000, function(){
	process.env.PORT === undefined? console.log("App listening on PORT 8000"):console.log("App listening on PORT"+ process.env.PORT);
});
