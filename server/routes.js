var path = require('path');
var express = require('express');

var router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
	/*res.sendFile(path.join(__dirname + '/index.html'), function(err) {
	if(err) 
		console.log(err);
	else
		console.log("Index Sent!")
	});
	*/
	res.send("Routing from routes.js!");
});

