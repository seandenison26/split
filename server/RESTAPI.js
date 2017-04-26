/*********************\
CRUD middleware API 
\*********************/
let 
	db = require('./mySQLconnect'),
	tasks = require('./tasks');

let REST = {}; 

module.exports = REST;

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
	
	db.query("SELECT * FROM Accounts WHERE username = ? INNER JOIN ", username, function(err, rows, fields) {
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
REST.buildSplitData = function (split_id, username){
	return new Promise ((res, rej) => {
		let newSplit = {
			
		};
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
REST.createSplit = function(title, username) {
	return new Promise ((res,rej) => {
		let newSplit = {
			title:title,
			creator:username
		};
		
		db.query("INSERT INTO splits SET ?; SELECT LAST_INSERT_ID();", newSplit, (err, rows) => {
			if(err) {
				rej(err);
			}
			else {
			let split_id = rows[0].split_id;
			RESTAPI.addUsertoSplit(split_id, username);	
			res(split_id,username); 
			}
		});
	});
};

//inserts a user-split pairing to the db
REST.addUsertoSplit = function(split_id, username) {
	 
	let addUser = {
		split_id: split_id,
		username: username
	};
	db.query("INSERT INTO split_users SET ?;", addUser, (err, rows) => {
		if(err) {
			rej(err);
		}
		else {
			console.log(username + "succesfully added to Split:"  + split_id);
		}
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







