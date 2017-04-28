var db = require('./mySQLconnect');
var REST = require('./RESTAPI');
var tasks = require('./tasks');
var router = require('./routes');

REST.createSplit("April 2017", "sean.denison26@gmaail.com", "Admin").then((sid,title,username)=> {console.log("Split #" + sid + " " + title + " successfully entered by:" + username); db.end();});












 
