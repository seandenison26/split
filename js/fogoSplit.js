/******************************\
Preliminary Split module to perform split actions on the server that will eventually be used by the client as well 
\******************************/

//split on local machine module

import {Split, User, Purchase} from './split';
let fs = require('fs');

let filepath = './splits/' + process.argv[2];

fs.readFile(filepath + '.json', 'utf8', function(err,data) {
	if (err)
		console.log(err);
	else {
		let 
		nicolemeal = 0, 
		thisSplit = buildSplitfromJSON(data),
		tax_rate = 1.1125,
		usertotals = Object.keys(thisSplit.users).map((user) => {
										let 
										thisuser = new Object;
									   	thisuser[thisSplit.users[user].username] = thisSplit.totalCategoryPurchases(thisSplit.users[user], "Total");
										return thisuser;
									});
											
		let nicolesplit = usertotals.filter((user) => {
						
						let uid = Object.keys(user)[0];
						if (uid !== "Nicole" ) 
							return user;
						else
							nicolemeal = user[uid]/4;
						
					});
					
		let splitString = nicolesplit.map((ob) => {
							let uid = Object.keys(ob)[0];
							if (uid !== "Zach") {
								return uid + " owes " + Number((ob[uid] + nicolemeal) * tax_rate).toFixed(2) + " for dinner."
							}
							else {
								return uid + " owes " + Number(ob[uid] * tax_rate).toFixed(2) + " for dinner."
								
							}
							}).join("\n");
		
		splitString = splitString + usertotals + data;

		fs.writeFile(filepath + 'Split.txt', splitString, (err) => {
			if(err) {
				console.log(err);
			}
			else {
				console.log(filepath + 'Split.txt succesfully written!');	
			}
		})
		console.log(thisSplit);

	}
});

function buildSplitfromJSON (data) {
    let file = JSON.parse(data),
    title = file.title,
    categories = file.categories;

    let users = Object.keys(file.users)
              .map((user) => {
                let purchases = file.users[user].purchases.map((p) => {return new Purchase('NA',p.date,p.category,p.vendor,p.amount);})
                return new User (user,purchases);
                     });

    return new Split(title, "Ziggy", users, categories);
}
