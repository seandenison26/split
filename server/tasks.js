/***********************************\
Task functions to be used by the API
\***********************************/

let tasks = {}

module.exports = tasks;

//Checks to see if a given password is correct  
tasks.passwordCheck = (givenpassword,accountpassword) => {
		if(givenpassword === accountpassword) {
			console.log("Password Successful");
			return true;
		}
		else {
			return false;
		}
};	

//Creates an AccountData Object to be used by API
tasks.createAccountObj = (username, email) => {
	let data = {
		username: username,
		email: email
	}
	return data;
};

//Creates an Account Data JSON file to be sent to the client
tasks.createAccountJSON = (username, email, splits) => {
	let data = {
		username: username,
		email: email,
		splits: splits
	};
	return JSON.stringify(data);
};

//Creates a splitData JSON file to be sent to the client
tasks.createSplitData = (title, creator, categories, users) => {
	let splitData = {
		title:title,
		creator: creator,
		categories: categories,
		users: users
	};
	return JSON.stringify(splitData);
};






