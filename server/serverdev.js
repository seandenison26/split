var db = require('./mySQLconnect');
var REST = require('./RESTAPI');
var tasks = require('./tasks');
var router = require('./routes');

REST.addSplitCategory(7,"groceries").then((cat, cat_id) => {console.log(cat + " " + cat_id)});

db.end();









 
