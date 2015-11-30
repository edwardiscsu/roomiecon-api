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
    zipCode: String,
    domiciles: [{ type: Schema.Types.ObjectId, ref: 'Domicile' }],
    preferences: [{ type: Schema.Types.ObjectId, ref: 'Preference' }]
}, {collection: 'users'});

module.exports = mongoose.model('User', userSchema);
