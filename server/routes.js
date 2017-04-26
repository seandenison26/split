/**********************************************\1
Creates router and contains CRUD routes for API
\**********************************************/

//requires various dependencies 
var 
	path = require('path');
	express = require('express');
	db = require('./mySQLconnect');
	REST = require('./RESTAPI');

//creates router
var router = express.Router();

var rootDir = __dirname + '/../' 

module.exports = router;

// routes index.html when get request is made to main host
router.get('/', function(req, res) {
	res.render('index', function(err) {

	if(err) { 
		console.log(err);
	}
	else
		console.log("Index HTML Sent!")
	});

});

//posts a login request and returns an Account Data json file if username and password match
router.post('/accountLogin', function(req, res) {
	let 
	username = req.username,
	password = req.password;

	REST.clientLogin(username,password)
		.then(REST.buildAccountData)
		.then((data) => res.end(data))
		.catch(res.send(err));
});


//logs a json list of all Account usernames 
router.get('/accountList', function(req, res) {
	db.query("SELECT usernames from Account", function(err,rows) {
		if (err) {
		console.log(err);
		return
		}
		else {
		console.log(rows);
		}
	})
});


//posts a new Account to the database and returns an Account data json file
router.post('/createAccount', function(req, res) {
	// parse account values for db
	let 
		username = req.username,
		password = req.password,
		email = req.email;	
	
	//create newAccount variable
	REST.createAccount(username, password, email)
	
	

	res.send(newAccount);
});


//posts a new Split to the database
router.post('/createSplit', function(req, res) {

});


//posts a new Purchase to the database
router.get('/createPurchase', function(req, res) {

});

//updates a Split
router.put('/updateSplit', function(req,res) {

});



