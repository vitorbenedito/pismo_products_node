var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  dueDate: Date
});

module.exports = mongoose.model('Product', ProductSchema);
