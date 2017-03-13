require('babel-register');



var mysql = require('mysql');
var express = require('express');

var app = express();

var db = mysql.createConnection({
	host: 'localhost',
	user: 'split_admin',
	password: 'password',
	database: 'split'
});

db.connect();

console.log("Database Connected");

//app.get();

app.listen(8080);

