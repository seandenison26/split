/*****************************************************
This is a preliminary mock up of the Split module
*****************************************************/
//creates a new Purchase object
export class Purchase  {
	constructor(id,date,category,vendor,amount,username,split_id) {
			this.id = id,
			this.date = date,
			this.category = category,
			this.vendor = vendor,
			this.amount = amount;
			this.username = username;
			this.split_id = split_id;

	}
}

//Creates a new user
export class User {
	constructor(username,purchases) {
		this.username = username;
		this.purchases = purchases;
	}
	//add a purchase to the user
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
	
	//helper function to return the number of users
	getNumUsers() {
		return this.users.length;
	}


	

	//takes in a user and returns the total amount purchased for a given category. The total amount of all categories will be returned if "Total" os provided as the category.
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
	
	//returns a string for each user showing how each user spent on each category
	getCategTotalsString() {
      	return Object.keys(this.users).map((user) =>
              		{return this.users[user].username + "\n" + this.categories.map((category) => { return (category + ": " + this.totalCategoryPurchases(this.users[user], category) + "\n");})
            			.join("");})
            			.join("\n");
  	}
	
	//returns the total of all purchases amounts in the Split
	getSplitTotals() {
		return Object.keys(this.users).map((user) => {return this.totalCategoryPurchases(this.users[user],"Total")}).reduce((a,b) => {return a+b}).toFixed(2);
  	}

	//returns the Split Total Amount divided by the number of users.
	getUserShare() {
	  return (this.getSplitTotals()/this.getNumUsers()).toFixed(2);
	}

	//Calculates how much each user is owed or owes the Split. 
  	getOweString() {
				return Object.keys(this.users).map((user) => {
      		var userTotal = this.totalCategoryPurchases(this.users[user],"Total"),
		userShare = this.getUserShare();
      		
		if (userTotal <= userShare)
        		return (this.users[user].username + " owes: " + (userShare - userTotal).toFixed(2));
      		else
        		return (this.users[user].username + " is owed: " + (userTotal - userShare).toFixed(2));
    		}).join("\n");
	}
	

	//Returns a string that contains a formatted list of the users individual total amounts by category, the amount of the Split, and the owe String. 
	getSplitString() {
		return ("Category Totals:" + this.getCategTotalsString() + "\nSplit Total:" + this.getSplitTotals() + "\nUser Share:" + this.getSplitTotals()/4 + "\n" + this.getOweString());
	}

}
