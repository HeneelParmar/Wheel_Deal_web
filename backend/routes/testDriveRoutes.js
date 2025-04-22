const express = require('express');
const router = express.Router();
const { bookTestDrive, getTestDrives } = require('../controllers/testDriveController');

router.post('/', bookTestDrive);
router.get('/', getTestDrives);

module.exports = router;