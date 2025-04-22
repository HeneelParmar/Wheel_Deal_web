// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db'); // 🔗 Import DB connection
const cors = require('cors');

const vehicleRoutes = require('./routes/vehicleRoutes');
const testDriveRoutes = require('./routes/testDriveRoutes');

const app = express();
const PORT = 5000;

// 🌐 Middlewares
app.use(cors());
app.use(express.json());

// 🔗 Connect to MongoDB
connectDB();

// 📦 Routes
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/test-drive', testDriveRoutes);

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
