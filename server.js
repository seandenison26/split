
var mysql = require('mysql');
var express = require('express');
var router = require('./server/routes');
var bodyParser = require("body-parser");
var db = require('./server/mySQLconnect');


var app = express(); 

//sets the the router
app.use('/',router);

//sets the location of static files to the public folder
app.use(express.static(__dirname + '/public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false}));

//parse application/json
app.use(bodyParser.json());

//allow server to run despite collecting an uncaught exception:
process.on('uncaughtException', function (err) {
    console.log(err);
}); 




app.listen(8080); 



