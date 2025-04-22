import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import testDriveRoutes from "./routes/testDriveRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve static files from /uploads
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/test-drive", testDriveRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/whealdeal")
  .then(() => {
    app.listen(5000, () => console.log("Server started on port 5000"));
  })
  .catch(err => console.error("MongoDB connection error:", err));
