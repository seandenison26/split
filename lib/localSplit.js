'use strict';

var _split = require('./split');

var fs = require('fs'); //split on local machine module

fs.readFile('./splits/' + process.argv[2], 'utf8', function (err, data) {
	if (err) console.log(err);else {
		var thisSplit = buildSplitfromJSON(data);
		console.log(thisSplit);
	}
});

function buildSplitfromJSON(data) {
	var file = JSON.parse(data),
	    title = file.title,
	    categories = file.categories,
	    users = Object.keys(file.users).map(function (user) {
		var purchases = file.users[user].purchases.map(function (p) {
			return new _split.Purchase('NA', p.date, p.category, p.vendor, p.amount);
		});
		return new _split.User(user, purchases);
	});

	return new _split.Split(title, "Ziggy", users, categories);
}