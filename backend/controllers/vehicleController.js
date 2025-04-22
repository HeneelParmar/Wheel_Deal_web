const Vehicle = require('../models/Vehicle');

exports.createVehicle = async (req, res) => {
  const { type, year, km, make, model, condition } = req.body;
  const images = req.files.map(file => file.path);
  const priceEstimate = 50000; // Dummy logic for estimate
  const newVehicle = new Vehicle({ type, year, km, make, model, condition, images, priceEstimate });
  await newVehicle.save();
  res.json(newVehicle);
};

exports.getVehicles = async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json(vehicles);
};

exports.estimatePrice = async (req, res) => {
  const { type, year, km, make, model, condition } = req.body;
  const basePrice = 100000;
  const ageFactor = (new Date().getFullYear() - year) * 5000;
  const kmFactor = km * 2;
  const conditionFactor = condition === 'Excellent' ? 1.2 : condition === 'Good' ? 1.0 : condition === 'OK' ? 0.8 : 0.6;
  const priceEstimate = (basePrice - ageFactor - kmFactor) * conditionFactor;
  res.json({ estimatedPrice: Math.max(priceEstimate, 20000) });
};