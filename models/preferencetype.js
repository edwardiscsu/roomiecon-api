var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var preferenceTypeSchema = Schema({
    name: String
}, {collection: 'preferenceTypes'});

module.exports = mongoose.model('PreferenceType', preferenceTypeSchema);

