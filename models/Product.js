var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var productSchema = new Schema({

  region: { type: String, Required:  'Product region cannot be left blank.' },

  country:    { type: String,     Required:  'Product country cannot be left blank.'},

  itemType: { type: String ,    Required:  'Product itemType cannot be left blank'},

  salesChannel: { type: String },

});

module.exports = mongoose.model('Products', productSchema);