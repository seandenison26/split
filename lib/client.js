'use strict';

var _split = require('./split');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*****************************************************************************************************
                                                                                                                                                          Account Module, Manages the account profile, creation and editiong of splits as well as the split function.
                                                                                                                                                          ******************************************************************************************************/

module.exports = function Client(name, password, user_id, profile) {
    _classCallCheck(this, Client);

    this.name = name, this.password = password, this.user_id = user_id, this.profile = profile || {};
};