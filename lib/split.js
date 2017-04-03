"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*****************************************************
This is a preliminary mock up of the Split module
*****************************************************/
//creates a new Purchase object
var Purchase = exports.Purchase = function Purchase(id, date, category, vendor, amount, username, split_id) {
	_classCallCheck(this, Purchase);

	this.id = id, this.date = date, this.category = category, this.vendor = vendor, this.amount = amount;
	this.username = username;
	this.split_id = split_id;
};

//Creates a new user


var User = exports.User = function () {
	function User(username, purchases) {
		_classCallCheck(this, User);

		this.username = username;
		this.purchases = purchases;
	}
	//add a purchase to the user


	_createClass(User, [{
		key: "addPurchase",
		value: function addPurchase(id, date, category, vendor, amount) {
			var length = this.purchases.length,
			    purchase = new Purchase(length, date, category, vendor, amount);
			this.purchases = this.purchases.concat(purchase);
		}

		//returns an object of the users names

	}, {
		key: "getUsername",
		value: function getUsername() {
			return this.username;
		}
	}]);

	return User;
}();

//creates a Split object


var Split = exports.Split = function () {
	function Split(title, creator, users, categories) {
		_classCallCheck(this, Split);

		this.title = title, this.creator = creator, this.users = users, this.categories = categories;
	}

	//helper function to return the number of users


	_createClass(Split, [{
		key: "getNumUsers",
		value: function getNumUsers() {
			return this.users.length;
		}

		//takes in a user and returns the total amount purchased for a given category. The total amount of all categories will be returned if "Total" os provided as the category.

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

		//returns a string for each user showing how each user spent on each category

	}, {
		key: "getCategTotalsString",
		value: function getCategTotalsString() {
			var _this = this;

			return Object.keys(this.users).map(function (user) {
				return _this.users[user].username + "\n" + _this.categories.map(function (category) {
					return category + ": " + _this.totalCategoryPurchases(_this.users[user], category) + "\n";
				}).join("");
			}).join("\n");
		}

		//returns the total of all purchases amounts in the Split

	}, {
		key: "getSplitTotals",
		value: function getSplitTotals() {
			var _this2 = this;

			return Object.keys(this.users).map(function (user) {
				return _this2.totalCategoryPurchases(_this2.users[user], "Total");
			}).reduce(function (a, b) {
				return a + b;
			}).toFixed(2);
		}

		//returns the Split Total Amount divided by the number of users.

	}, {
		key: "getUserShare",
		value: function getUserShare() {
			return (this.getSplitTotals() / this.getNumUsers()).toFixed(2);
		}

		//Calculates how much each user is owed or owes the Split. 

	}, {
		key: "getOweString",
		value: function getOweString() {
			var _this3 = this;

			return Object.keys(this.users).map(function (user) {
				var userTotal = _this3.totalCategoryPurchases(_this3.users[user], "Total"),
				    userShare = _this3.getUserShare();

				if (userTotal <= userShare) return _this3.users[user].username + " owes: " + (userShare - userTotal).toFixed(2);else return _this3.users[user].username + " is owed: " + (userTotal - userShare).toFixed(2);
			}).join("\n");
		}

		//Returns a string that contains a formatted list of the users individual total amounts by category, the amount of the Split, and the owe String. 

	}, {
		key: "getSplitString",
		value: function getSplitString() {
			return "Category Totals:" + this.getCategTotalsString() + "\nSplit Total:" + this.getSplitTotals() + "\nUser Share:" + this.getSplitTotals() / 4 + "\n" + this.getOweString();
		}
	}]);

	return Split;
}();