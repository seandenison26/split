var db = require('./mySQLconnect');
var REST = require('./RESTAPI');
var tasks = require('./tasks');
var router = require('./routes');

REST.buildAccountData("Admin", "sean.denison26@gmail.com").then((data) => {console.log(data)});

db.end();









 
