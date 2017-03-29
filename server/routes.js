/**********************************************\
Creates router and contains CRUD routes for API
\**********************************************/

//requires various 
var path = require('path');
var express = require('express');
var db = require('./mySQLconnect');


var router = express.Router();

var rootDir = __dirname + '/../' 



module.exports = router;

// routes index.html when get request is made to main host
router.get('/', function(req, res) {
	res.sendFile(path.join(rootDir, 'index.html'), function(err) {
	if(err) { 
		console.log(err);
	}
	else
		console.log("Index Sent!")
	});
});

//posts a new account to the database
router.post('/createAccount', function(req, res) {

});


//posts a new Split to the database
router.post('/createSplit', function(req, res) {

});


//posts a new Purchase to the database
router.get('/createPurchase', function(req, res) {

});



