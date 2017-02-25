'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Account = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*****************************************************************************************************
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Account Module, Manages the account profile, creation and editiong of splits as well as the split function.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ******************************************************************************************************/

var _split = require('./split.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');

var Account = exports.Account = function () {
    function Account(name, password) {
        _classCallCheck(this, Account);

        this.name = name, this.password = password, this.profile = {}, this.purchases = [];
    }

    _createClass(Account, [{
        key: 'createSplitFromFile',
        value: function createSplitFromFile(filepath) {
            var file = JSON.parse(fs.readFileSync(filepath, 'utf8')),
                split = new _split.Split(file.title, this.account, file.users, file.categories);
            return split;
        }
        //saves data to database

    }, {
        key: 'saveSplitData',
        value: function saveSplitData(filepath, name) {
            fs.writeFile();
        }
    }]);

    return Account;
}();

var test = new Account("Admin", "poop");
var thisSplit = test.createSplitFromFile('./accounts/admin/splits/January.json');
console.log(thisSplit);