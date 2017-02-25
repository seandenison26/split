/*****************************************************************************************************
Account Module, Manages the account profile, creation and editiong of splits as well as the split function.
******************************************************************************************************/


import {Split} from './split.js';
let fs = require('fs');

export class Account {
    constructor(name,password) {
        this.name = name, this.password = password, this.profile = {}, this.purchases = [];
  }

    createSplitFromFile(filepath) {
        let file = JSON.parse((fs.readFileSync(filepath,'utf8'))),
        split = new Split(file.title,this.account,file.users,file.categories)
        return split;
  }
	//saves data to database
    saveSplitData(filepath, name) {
        fs.writeFile();
  }

}

let test = new Account("Admin","poop");
let thisSplit = test.createSplitFromFile('./accounts/admin/splits/January.json');
console.log(thisSplit);
