

// Require the mongoose library
const mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb+srv://adarshpandey11222:hr6eQZu1aGA11yPj@cluster0.jeipmsk.mongodb.net/",{
  useNewUrlParser: true,
  tls: true,
  useUnifiedTopology: true, // Add this option to avoid a deprecation warning
});

// Acquire the connection to check if it's successful
const db = mongoose.connection;

// Handle connection errors
db.on("error", console.error.bind(console, "Error connecting to the database:"));

// If the connection is successful, print a success message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports=db;