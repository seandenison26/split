/*****************************************************
Split Module,
*****************************************************/
//creates a new Purchase object
class Purchase  {
	constructor(id,date,category,vendor,amount) {
			this.id = id,
			this.date = date,
			this.category = category,
			this.vendor = vendor,
			this.amount = amount;
	}
}

//Creates a new user
class Users {
	constructor(account,purchases) {
		this.account = account;
		this.purchases = [];
	}
	addPurchase(id,date,category,vendor,amount) {
		var length = this.purchases.length, purchase = new Purchase(length,date,category,vendor,amount);
		this.purchases.concat(purchase);
	}
}

class Split {
	//creates a Split object as well as creates JSON file
	constructor(title, creator, users, categories) {
		this.title = title,
		this.creator = this.account,
		this.users = users || this.user,
		this.categories = categories,
	  this.fileloc = "./accounts/" + this.creator + "/splits/" + this.name + ".";
	}

	//saves data to database
	addUser(user) {
		this.users.concat(user);
	}

	//  This declares the file path
  //	var fileloc = "./users/" + this.creator + "/splits/" + this.name + ;

	// This gives us the number of users
	getNumUsers () {
		return this.users.length;
	}

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

	getCategTotalsString() {
      	return Object.keys(users).map((user) =>
              		{return user + "\n" + this.categories.map((category) => { return (category + ": " + totalCategoryPurchases(users[user], category) + "\n");})
            			.join("");})
            			.join("\n");
  }

	getSplitTotals() {
		return Object.keys(users).map((user) => {return totalCategoryPurchases(users[user],"Total")}).reduce((a,b) => {return a+b}).toFixed(2);
  }

	getUsersShare() {
	  return (getSplitTotals()/getNumUsers()).toFixed(2);
	}

  getOweString() {
				let userShare = getUsersShare();
				return Object.keys(users).map((user) => {
      		var userTotal = totalCategoryPurchases(users[user],"Total");
      		if (userTotal <= userShare)
        		return (user + " owes: " + (roomateShare - userTotal).toFixed(2))
      		else
        		return (user + " is owed: " + (userTotal - roomateShare).toFixed(2))
    }).join("\n");
}


//Original call
//console.log(totalsString + "\nHouse Total:" + houseTotal + "\nRoomate Share:" + houseTotal/4 + "\n" + //oweString);

}
export {Split};
