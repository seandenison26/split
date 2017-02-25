"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*****************************************************
Split Module,
*****************************************************/
//creates a new Purchase object
var Purchase = function Purchase(id, date, category, vendor, amount) {
	_classCallCheck(this, Purchase);

	this.id = id, this.date = date, this.category = category, this.vendor = vendor, this.amount = amount;
};

//Creates a new user


exports.default = Purchase;

var Users = function () {
	function Users(account, purchases) {
		_classCallCheck(this, Users);

		this.account = account;
		this.purchases = [];
	}

	_createClass(Users, [{
		key: "addPurchase",
		value: function addPurchase(id, date, category, vendor, amount) {
			var length = this.purchases.length,
			    purchase = new Purchase(length, date, category, vendor, amount);
			this.purchases.concat(purchase);
		}
	}]);

	return Users;
}();

var Split = function () {
	//creates a Split object as well as creates JSON file
	function Split(title, creator, users, categories) {
		_classCallCheck(this, Split);

		this.title = title, this.creator = this.account, this.users = users || this.user, this.categories = categories, this.fileloc = "./accounts/" + this.creator + "/splits/" + this.name + ".";
	}

	//saves data to database


	_createClass(Split, [{
		key: "addUser",
		value: function addUser(user) {
			this.users.concat(user);
		}

		//  This declares the file path
		//	var fileloc = "./users/" + this.creator + "/splits/" + this.name + ;

		// This gives us the number of users

	}, {
		key: "getNumUsers",
		value: function getNumUsers() {
			return this.users.length;
		}
	}, {
		key: "totalCategoryPurchases",
		value: function totalCategoryPurchases(user, category) {
			var total = 0,
			    values = user.purchases.filter(function (value) {
				return value.category === category;
			});
			if (category === "Total") total = user.purchases.reduce(function (a, b) {
				return { amount: a.amount + b.amount };
			});else if (user.purchases == undefined || values[0] == undefined) return 0;else total = values.reduce(function (a, b) {
				return { amount: a.amount + b.amount };
			});
			return Number(total.amount.toFixed(2));
		}
	}, {
		key: "getCategTotalsString",
		value: function getCategTotalsString() {
			var _this = this;

			return Object.keys(users).map(function (user) {
				return user + "\n" + _this.categories.map(function (category) {
					return category + ": " + totalCategoryPurchases(users[user], category) + "\n";
				}).join("");
			}).join("\n");
		}
	}, {
		key: "getSplitTotals",
		value: function getSplitTotals() {
			return Object.keys(users).map(function (user) {
				return totalCategoryPurchases(users[user], "Total");
			}).reduce(function (a, b) {
				return a + b;
			}).toFixed(2);
		}
	}, {
		key: "getUsersShare",
		value: function getUsersShare() {
			return (getSplitTotals() / getNumUsers()).toFixed(2);
		}
	}, {
		key: "getOweString",
		value: function getOweString() {
			var userShare = getUsersShare();
			return Object.keys(users).map(function (user) {
				var userTotal = totalCategoryPurchases(users[user], "Total");
				if (userTotal <= userShare) return user + " owes: " + (roomateShare - userTotal).toFixed(2);else return user + " is owed: " + (userTotal - roomateShare).toFixed(2);
			}).join("\n");
		}

		//Original call
		//console.log(totalsString + "\nHouse Total:" + houseTotal + "\nRoomate Share:" + houseTotal/4 + "\n" + //oweString);

	}]);

	return Split;
}();