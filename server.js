


var mysql = require('mysql');
var express = require('express');
var router = require('./server/routes');

var app = express(); 

app.use('/',router);


//my sql 
var db = mysql.createConnection({
	host: 'localhost',
	user: 'split_admin',
	password: 'password',
	database: 'split'
});

//connects to database
db.connect();

//allow server to run despite collecting an uncaught exception:
process.on('uncaughtException', function (err) {
    console.log(err);
}); 

console.log("Database Connected");

//app.get();




app.listen(8080); 



