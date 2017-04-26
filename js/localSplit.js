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
		let thisSplit = buildSplitfromJSON(data),
		totalCategories = thisSplit.getCategTotalsString(),
		splitString = thisSplit.getSplitString() + "\n" + data;		
		

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
