var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var preferenceSchema = Schema({
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    prefType: { type: Schema.Types.ObjectId, ref: 'PreferenceType' },
    isMain: Boolean,
    isActive: Boolean
}, {collection: 'preferences'});

module.exports = mongoose.model('Preference', preferenceSchema);
