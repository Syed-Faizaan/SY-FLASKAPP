const express = require("express");
const fs = require("fs");
const path = require("path");  // Add path module for better path resolution
const app = express();

// Load index.json data
const filePath = path.join(__dirname, "index.json");  // Resolving the correct file path

let data;
try {
  data = JSON.parse(fs.readFileSync(filePath, "utf8"));
} catch (err) {
  console.error("Error reading or parsing index.json:", err);
  process.exit(1);  // Stop the server if there's an issue with the file
}

// Define API endpoints
app.get("/", (req, res) => {
  res.send("Welcome to the SyD Info API!");
});

app.get("/data", (req, res) => {
  res.json(data);
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});

