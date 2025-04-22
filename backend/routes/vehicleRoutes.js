const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { createVehicle, getVehicles, estimatePrice } = require('../controllers/vehicleController');

router.post('/', upload.array('images'), createVehicle);
router.get('/', getVehicles);
router.post('/estimate', estimatePrice);

module.exports = router;