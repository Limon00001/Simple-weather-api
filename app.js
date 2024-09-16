// Dependencies
import 'dotenv/config';
import express from 'express';

// Instance
const app = express();

// Middleware for parsing JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes

// Port
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});