// Initiating express app
const express = require("express");
const app = express();

//Route handler
app.get("/", (req, res) => {
  res.send({ bye: "budy" });
});

// Dynamic Port Binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);
