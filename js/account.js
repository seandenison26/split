/*****************************************************************************************************
Account Module, Manages the account profile, creation and editiong of splits as well as the split function.
******************************************************************************************************/


require('./split.js');
let fs = require('fs');

module.exports = class Account {
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

var testSplit = new Split();
