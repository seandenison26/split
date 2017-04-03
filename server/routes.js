/**********************************************\1
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

//posts a login request and returns a user data file if username and password match
router.post('/accountLogin', function(req, res) {
	var login = req;
	console.log(req);
	db.query("SELECT password from Account where ? = username",login, function(err,rows) {
		if (err) {
		console.log(err);
		return;
		}
		else {
		console.log(rows);
		}
	});
};


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



//posts a new Account to the database
router.post('/createAccount', function(req, res) {
	// parse account values for db
	console.log(req);
	req.body();
	
	//create newAccount variable
	var newAccount = {
		username: "",
		password: "",
		email: ""
	};

	//insert accountValue into db
	db.query("INSERT into Accounts set ?", newAccount, function(err,result) {
	if (err) {
		console.log(err); 
	}	
	else {
		console.log(result.username + "was successfully inserted!");
		newAccount = result;
		return;
	}
	});
	
	//will EVENTUALLY send a brand new accountData file
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



