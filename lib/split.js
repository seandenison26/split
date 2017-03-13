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
var Purchase = exports.Purchase = function Purchase(id, date, category, vendor, amount, user_id, split_id) {
	_classCallCheck(this, Purchase);

	this.id = id, this.date = date, this.category = category, this.vendor = vendor, this.amount = amount;
	this.user_id = user_id;
	this.split_id = split_id;
};

//Creates a new user


var Users = exports.Users = function () {
	function Users(user_id, purchases) {
		_classCallCheck(this, Users);

		this.user_id = user_id;
		this.purchases = [];
	}

	_createClass(Users, [{
		key: "addPurchase",
		value: function addPurchase(id, date, category, vendor, amount) {
			var length = this.purchases.length,
			    purchase = new Purchase(length, date, category, vendor, amount);
			this.purchases = this.purchases.concat(purchase);
		}
	}]);

	return Users;
}();

//creates a Split object


var Split = exports.Split = function () {
	function Split(title, creator, users, categories, purchases) {
		_classCallCheck(this, Split);

		this.title = title, this.creator = creator, this.users = users, this.categories = categories;
	}

	_createClass(Split, [{
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
		key: "getroomateShare",
		value: function getroomateShare() {
			return (getSplitTotals() / getNumUsers()).toFixed(2);
		}
	}, {
		key: "getOweString",
		value: function getOweString() {
			return Object.keys(users).map(function (user) {
				var userTotal = totalCategoryPurchases(users[user], "Total");
				if (userTotal <= roomateShare) return user + " owes: " + (roomateShare - userTotal).toFixed(2);else return user + " is owed: " + (userTotal - roomateShare).toFixed(2);
			}).join("\n");
		}

		//Original call
		//console.log(totalsString + "\nHouse Total:" + houseTotal + "\nRoomate Share:" + houseTotal/4 + "\n" + //oweString);

	}]);

	return Split;
}();