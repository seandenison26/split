var db = require('./mySQLconnect');
var REST = require('./RESTAPI');
var tasks = require('./tasks');
var router = require('./routes');

test = tasks.createAccountObj("Admin","sean.denison26@gmaail.com")

REST.buildAccountJSON(test).then((data) => {console.log(JSON.parse(data))})


db.end();









 
