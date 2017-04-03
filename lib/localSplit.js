'use strict';

var _split = require('./split');

var fs = require('fs'); /******************************\
                        Preliminary Split module to perform split actions on the server that will eventually be used by the client as well 
                        \******************************/

//split on local machine module

var filepath = './splits/' + process.argv[2];

fs.readFile(filepath + '.json', 'utf8', function (err, data) {
	if (err) console.log(err);else {
		var thisSplit = buildSplitfromJSON(data),
		    totalCategories = thisSplit.getCategTotalsString(),
		    splitString = thisSplit.getSplitString() + "\n" + data;

		fs.writeFile(filepath + 'Split.txt', splitString, function (err) {
			if (err) {
				console.log(err);
			} else {
				console.log(filepath + 'Split.txt succesfully written!');
			}
		});
		console.log(thisSplit);
	}
});

function buildSplitfromJSON(data) {
	var file = JSON.parse(data),
	    title = file.title,
	    categories = file.categories,
	    users = Object.keys(file.users);

	console.log(users);

	users = users.map(function (user) {
		var purchases = file.users[user].purchases.map(function (p) {
			return new _split.Purchase('NA', p.date, p.category, p.vendor, p.amount, user);
		});
		return new _split.User(user, purchases);
	});

	return new _split.Split(title, "Ziggy", users, categories);
}

function buildSplitfromJSON(data) {
	var file = JSON.parse(data),
	    title = file.title,
	    categories = file.categories;

	var users = Object.keys(file.users).map(function (user) {
		var purchases = file.users[user].purchases.map(function (p) {
			return new _split.Purchase('NA', p.date, p.category, p.vendor, p.amount);
		});
		return new _split.User(user, purchases);
	});

	return new _split.Split(title, "Ziggy", users, categories);
}