/******************\
CRUD middleware API 
SCD
\******************/
let 
	db = require('./mySQLconnect'),
	tasks = require('./tasks');

let REST = {}; 


//Check the post body to see if the username matches the passwoord. If incorrect returns an error message, else returns an AccountData json file for the client
REST.clientLogin = function(username, password) {
	return new Promise ((res, rej) => {
	db.query("SELECT * FROM accounts WHERE username = ?;", username, function(err,rows) {
			
			if (err) {
				rej(error);
			}
			else {
				let
				selectedPass = rows[0].password,
				selectedEmail = rows[0].email;
			
				if(tasks.passwordChecks(password,selectedPass)) {
					res(username, selectedEmail);
				}		
				else {
					rej("Username and password do not match.");
				}
			}
		});
	});

};

//creates and returns an AccountData json file 
//add innerjoin to query
REST.buildAccountData = function(username, email) {
	
	return new Promise ((res, rej) => {
	let accountData = {}
	
	db.query("SELECT (split_id) FROM split_users WHERE username = ? INNER JOIN ", [username,email], function(err, rows, fields) {
		if(err) {
			rej(err);
		}
		else {
			let data = rows;
			accountData = tasks.createAccountData(data);    
			res(accountData);
		}
	});  
	console.log(accountData);
	});
};


//creates a SplitData json file
REST.buildSplitData = function (split_id){
	return new Promise ((res, rej) => {
		
		
		
		
		
		
	});
};

//inserts a new Account into the database
REST.createAccount = function(username,password,email) {
	
	return new Promise ((res,rej) => {
		let newAccount = {
			username:username,
			password:password,
			email:email
		}; 

		db.query("INSERT INTO accounts SET ?;", newAccount, function(err) {
			if (err) { 
				rej(err);

			}
			else {
				console.log("Account keyed to " + newAccount.username + "successfully created.");
				res(username, email);
			}
	
		});
	});
};

//inserts a new Split into the databse
REST.createSplit = function(title, email, username) {
	return new Promise ((res,rej) => {
		let newSplit = [
			title,
			email
		];
	        	
		db.query("INSERT INTO splits (title, creator) VALUES (?,(SELECT email FROM accounts WHERE email = ?));",newSplit, (err, rows) => {
			if(err) {
				rej(err);
			}
			else {
			let split_id = rows.insertId;
			REST.addUsertoSplit(split_id, username).then((split_id,username) => res(split_id,title,username));	
			}
		});
	});
};

//inserts a user-split pairing to the db
REST.addUsertoSplit = function(split_id, username, email) {

 return new Promise ((res, rej) => {
	let addUser = [
		split_id,
		username
	];
	db.query("INSERT INTO split_users VALUES ((SELECT split_id from splits WHERE split_id = ?),(SELECT username FROM accounts WHERE username = ?))", addUser, (err, rows) => {
		if(err) {
			rej(err);
		}
		else {
			console.log(username + "succesfully added to Split:"  + split_id);
			res(split_id, username);
		}
	});
	});
};

//removes a user from a split user

//adds a category to split


//creates a new Purchase
REST.createPurchase = function() {

};

//updates the data 
REST.update = function() {

};


module.exports = REST;





