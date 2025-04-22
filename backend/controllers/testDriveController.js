const TestDrive = require('../models/TestDrive');

exports.bookTestDrive = async (req, res) => {
  const { vehicleId, name, contact, date, time } = req.body;
  const testDrive = new TestDrive({ vehicleId, name, contact, date, time });
  await testDrive.save();
  res.json(testDrive);
};

exports.getTestDrives = async (req, res) => {
  const drives = await TestDrive.find();
  res.json(drives);
};