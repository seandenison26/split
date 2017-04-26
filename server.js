
var express = require('express');
var router = require('./server/routes');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');


var app = express(); 
//use ejs as view engine
app.set('view engine', 'ejs');
//app.use(expressLayouts);
//app.set('views', './views');


//sets the location of static files to the public folder
app.use(express.static(__dirname + '/public'));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:false}));

//parse application/json
app.use(bodyParser.json());


//sets the the router
app.use('/',router);


//allow server to run despite collecting an uncaught exception:
process.on('uncaughtException', function (err) {
    console.log(err);
}); 
app.listen(8080); 



