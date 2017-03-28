var path = require('path');
var express = require('express');

var router = express.Router();

var rootDir = __dirname + '/../' 



module.exports = router;

router.get('/', function(req, res) {
	res.sendFile(path.join(rootDir, 'index.html'), function(err) {
	if(err) { 
		console.log(err);
	}
	else
		console.log("Index Sent!")
	});
	
});


