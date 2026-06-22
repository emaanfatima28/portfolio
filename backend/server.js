const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const contactRoutes = require("./routes/contact");
const projectRoutes = require("./routes/projects");

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
