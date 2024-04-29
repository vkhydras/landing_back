const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://reease:reease@reease.d9vzukw.mongodb.net/?retryWrites=true&w=majority&appName=ReEase"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
    process.exit(1); // Exit with error
  });
