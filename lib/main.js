'use strict';

require('./account.js');

require('babel-register');


var fs = require('fs');
var Admin = new Account("Admin", "General");

console.log("User:" + Admin.name + "\nPassword:" + Admin.password + "\n");

var thisSplit = createSplitFromFile('./accounts/admin/splits/January.json');
console.log(thisSplit);