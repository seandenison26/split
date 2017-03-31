/*****************************************************
This is a preliminary mock up of the Split module
*****************************************************/
//creates a new Purchase object
export class Purchase  {
	constructor(id,date,category,vendor,amount,user_id,split_id) {
			this.id = id,
			this.date = date,
			this.category = category,
			this.vendor = vendor,
			this.amount = amount;
			this.user_id = user_id;
			this.split_id = split_id;

	}
}

//Creates a new user
export class User {
	constructor(user_id,purchases) {
		this.user_id = user_id;
		this.purchases = purchases;
	}
	addPurchase(id,date,category,vendor,amount) {
		var length = this.purchases.length, purchase = new Purchase(length,date,category,vendor,amount);
		this.purchases = this.purchases.concat(purchase);
	}
}

//creates a Split object
export class Split {
	constructor(title, creator, users, categories) {
		this.title = title,
		this.creator = creator,
		this.users = users,
		this.categories = categories
	}

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

	getroomateShare() {
	  return (getSplitTotals()/getNumUsers()).toFixed(2);
	}

  	getOweString() {
				return Object.keys(users).map((user) => {
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
