const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: String,
  year: Number,
  km: Number,
  make: String,
  model: String,
  condition: String,
  images: [String],
  priceEstimate: Number,
});

module.exports = mongoose.model('Vehicle', vehicleSchema);