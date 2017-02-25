require('babel-register');
import './account.js';


var fs = require('fs');
var Admin = new Account("Admin", "General");

console.log("User:" + Admin.name + "\nPassword:" + Admin.password + "\n");

let thisSplit = createSplitFromFile('./accounts/admin/splits/January.json');
console.log(thisSplit);
