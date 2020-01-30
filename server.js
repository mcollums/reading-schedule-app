const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3002;
const chalk = require('chalk');


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(express.static("public"));

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book_plan");

// Start the API server
server.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

//Make sure Mongoose connection is disconnected
// process.on('SIGINT', () => {
//   mongoose.connection.close().then(() => {
//     console.log("Mongoose disconnected");
//     process.exit(0);
//   })
// })


