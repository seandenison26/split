var mysql = require('mysql');

//my sql db connection
var mySQLdb = mysql.createConnection({
		host: 'localhost',
		user: 'split_admin',
		password: 'password',
		database: 'split'
});

//connects to database
mySQLdb.connect(function(err) {
		if(err) 
			throw error;
		else
			console.log("MySQL Database Connected");
});

module.exports = (mySQLdb);
