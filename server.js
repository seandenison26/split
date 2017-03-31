
var mysql = require('mysql');
var express = require('express');
var router = require('./server/routes');
var bodyParser = require("body-parser");
var db = require('./server/mySQLconnect');


var app = express(); 

app.use('/',router);

//sets the location of static files
app.use(express.static(__dirname + '/views'));

//uses body parser to parse all routes
app.use(bodyParser());

//allow server to run despite collecting an uncaught exception:
process.on('uncaughtException', function (err) {
    console.log(err);
}); 




app.listen(8080); 



