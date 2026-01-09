// Import packages
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from './config/db.js'
import { clerkWebhooks } from "./controllers/webhooks.js";
// Initialize Express app
const app = express();

// connect db

await connectDB()
// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get("/", (req, res) => {
  res.send("API Working");
});
// For webhook route
app.post('/api/clerk', clerkWebhooks);

// Set the port from environment variable or default
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
