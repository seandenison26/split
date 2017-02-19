var fs = require('fs');
var Admin = new User("Admin", "General");
var testSplit = new newSplit(Admin);

console.log("User:" + Admin.name + "\nPassword:" + Admin.password + "\n");

function totalCategoryPurchase(user, category) {
    var total = 0;
    if(category === "ALL")
     total = user.purchases.reduce(function(a,b) {
        return a.amount + b.amount;
     });

    return total;
}

function User(name,password) {
  this.name = name, this.password = password, this.profile = {}, this.purchases = [];
}

function Purchase(user,date,category,payee,amount) {
  this.user = user, this.date = date, this.category = category, this.payee = payee, this.amount = amount;
}

function newSplit(creator) {
  this.users = [];
  this.users.push(creator);
}
