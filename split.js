/*****************************************************
This is a preliminary mock up of the Split module
*****************************************************/
//creates a new Purchase object
module.exports = class Purchase  {
	constructor(id,date,category,vendor,amount) {
			this.id = id,
			this.date = date,
			this.category = category,
			this.vendor = vendor,
			this.amount = amount;
	}
}

//Creates a new user
module.exports = class Users {
	constructor(account,purchases) {
		this.account = account;
		this.purchases = [];
	}
	addPurchase(id,date,category,vendor,amount) {
		var length = this.purchases.length, purchase = new Purchase(length,date,category,vendor,amount);
		this.purchases.concat(purchase);
	}
}

module.exports = class Split {
	//creates a Split object as well as creates JSON file
	constructor(name, title, creator, users, categories, purchases) {
		this.name = name,
		this.title = title,
		this.creator = this.user,
		this.users = [],
		this.categories = categories,
	  this.fileloc = "./users/" + this.creator + "/splits/" + this.name + ".";
	}

	//saves data to database
	addUser(user) {

	}

	saveData() {

	}
	//  This declares the file path
  //	var fileloc = "./users/" + this.creator + "/splits/" + this.name + ;

	// This requires the file fata
	// this.thisSplit = require(fileloc)


	// This gives us the number of users
	//numUsers = Object.keys(users).length;

	totalCategoryPurchases(user, category) {
    		var total = 0, values = user.purchases.filter((value) => {return value.category === category;});
    		if (category === "Total")
     		total = user.purchases.reduce((a,b) => {
        	return {amount: a.amount + b.amount};
     		});
    		else if (user.purchases == undefined || values[0] == undefined)
       			return 0;
    		else
      			total = values.reduce((a,b) => {return {amount: a.amount + b.amount}});
    		return Number(total.amount.toFixed(2));
	}

	getTotalsString() {
      	return Object.keys(users).map((user) =>
              		{return user + "\n" + this.categories.map((category) => { return (category + ": " + totalCategoryPurchases(users[user], category) + "\n");})
            			.join("");})
            			.join("\n"),

    		houseTotal = Object.keys(users).map((user) => {return totalCategoryPurchases(users[user],"Total")}).reduce((a,b) => {return a+b}).toFixed(2),

    	roomateShare = (houseTotal/numUsers).toFixed(2),

    	oweString = Object.keys(users).map((user) => {
      		var userTotal = totalCategoryPurchases(users[user],"Total");
      		if (userTotal <= roomateShare)
        		return (user + " owes: " + (roomateShare - userTotal).toFixed(2))
      		else
        		return (user + " is owed: " + (userTotal - roomateShare).toFixed(2))
    }).join("\n");
}

//Original call
//console.log(totalsString + "\nHouse Total:" + houseTotal + "\nRoomate Share:" + houseTotal/4 + "\n" + //oweString);

}
