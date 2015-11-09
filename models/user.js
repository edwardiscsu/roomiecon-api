var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = Schema({
    name: {
        first: String,
        last: String,
        tag: String
    },
    email: String,
    password: String,
    zipCode: String
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);
