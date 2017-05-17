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


// routes index.html when get request is made to main host
router.get('/', function(req, res) {
	res.render('pages/index');
	console.log("Index Sent!")
});



//posts a login request and returns an Account Data json file if username and password match
router.get('/api/accountLogin/:username/:password', function(req, res) {
	let 
	username = req.params.username,
	password = req.params.password;

	REST.clientLogin(username,password)
		.then(REST.buildAccountJSON)
		.then((data) => res.end(data))
});


//logs a json list of all Account usernames 
router.get('api/accountList', function(req, res) {
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
router.post('api/createAccount', function(req, res) {
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
router.post('api/createSplit', function(req, res) {

});


//posts a new Purchase to the database
router.get('api/createPurchase', function(req, res) {

});

//updates a Split
router.put('api/updateSplit', function(req,res) {

});


module.exports = router;
