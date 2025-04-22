const mongoose = require('mongoose');

const testDriveSchema = new mongoose.Schema({
  vehicleId: String,
  name: String,
  contact: String,
  date: String,
  time: String,
});

module.exports = mongoose.model('TestDrive', testDriveSchema);