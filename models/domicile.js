var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var domicileSchema = Schema({
    price: Number,
    zipCode: String,
    isActive: Boolean
}, {collection: 'domiciles'});

module.exports = mongoose.model('Domicile', domicileSchema);
