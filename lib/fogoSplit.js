'use strict';

var _split = require('./split');

var fs = require('fs'); /******************************\
                        Preliminary Split module to perform split actions on the server that will eventually be used by the client as well 
                        \******************************/

//split on local machine module

var filepath = './splits/' + process.argv[2];

fs.readFile(filepath + '.json', 'utf8', function (err, data) {
	if (err) console.log(err);else {
		var nicolemeal = 0,
		    thisSplit = buildSplitfromJSON(data),
		    tax_rate = 1.1125,
		    usertotals = Object.keys(thisSplit.users).map(function (user) {
			var thisuser = new Object();
			thisuser[thisSplit.users[user].username] = thisSplit.totalCategoryPurchases(thisSplit.users[user], "Total");
			return thisuser;
		});

		var nicolesplit = usertotals.filter(function (user) {

			var uid = Object.keys(user)[0];
			if (uid !== "Nicole") return user;else nicolemeal = user[uid] / 4;
		});

		var splitString = nicolesplit.map(function (ob) {
			var uid = Object.keys(ob)[0];
			if (uid !== "Zach") {
				return uid + " owes " + Number((ob[uid] + nicolemeal) * tax_rate).toFixed(2) + " for dinner.";
			} else {
				return uid + " owes " + Number(ob[uid] * tax_rate).toFixed(2) + " for dinner.";
			}
		}).join("\n");

		splitString = splitString + usertotals + data;

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
	    categories = file.categories;

	var users = Object.keys(file.users).map(function (user) {
		var purchases = file.users[user].purchases.map(function (p) {
			return new _split.Purchase('NA', p.date, p.category, p.vendor, p.amount);
		});
		return new _split.User(user, purchases);
	});

	return new _split.Split(title, "Ziggy", users, categories);
}