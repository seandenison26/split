/*****************************************************
This is a preliminary mock up of the Split module
*****************************************************/
class Split {
	//creates an  instance of the split class as well as creates JSON file
	constructor(name, title, creator, users, categories, purchases) {
		this.name = name;
		this.title = title;
		this.creator = this.user;
		this.users = [];
		this.categories = categories;
		this.purchases = [];
	}
	
	//adds Purchase to this splits purchases
	addPurchase() {
	
	}
	//saves data to database
	saveData() {
	
	}

	var fileloc = "./users/" + this.creator + "/splits/" + this.name + ;

	var thisSplit = require(file),
    	
	users = thisSplit.users,
		
    	numUsers = Object.keys(users).length;

	function totalCategoryPurchases(user, category) {
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

	var totalsString =
      		Object.keys(users).map((user) =>
              		{return user + "\n" + thisSplit.categories.map((category) => { return (category + ": " + totalCategoryPurchases(users[user], category) + "\n");})
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


console.log(totalsString + "\nHouse Total:" + houseTotal + "\nRoomate Share:" + houseTotal/4 + "\n" + oweString);

}
