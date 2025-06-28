const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React build
app.use(express.static(path.join(__dirname, "client/build")));

// API routes here
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Catch-all route to serve React app
app.get("/React-project", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
