//set dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mysql = require('mysql');


//use bodyParser, do not encode url.
app.use(bodyParser.urlencoded({
  extended: false
}));

var routes = require("./htmlRoutes");
app.use("/", routes);

//serve up assets folder and all content as static files from server to client.
app.use(express.static('app/public'));



//Ternary operator. If process.env.port is undefined, we use 8000. In either case, log result.
app.listen(process.env.PORT || 8000, function(){
	process.env.PORT === undefined? console.log("App listening on PORT 8000"):console.log("App listening on PORT"+ process.env.PORT);
});
