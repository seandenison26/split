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


//Creates a AccountData JSON file to be sent to the client
tasks.createAccountData = (un, em, sps) => {
	let AccountData = {
		username: un,
		email: en,
		splits: sps,
	}
	return JSON.stringify(AccountData);
};






