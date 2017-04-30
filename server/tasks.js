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


//Creates an accountData JSON file to be sent to the client
tasks.createAccountData = (un, em, sps) => {
	let data = {
		username: un,
		email: em,
		splits: sps
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






