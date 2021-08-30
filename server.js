// REQUIRE 🍓 //
const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const moment = require("moment");

// EXPRESS SERVER DELIVERY 📫 //
const app = express();

// SET PORT //
const PORT = process.env.PORT || 3001;

// PARSE STRING / ARRAY 🍓 //
app.use(express.urlencoded({ extended: true }));

// PARSE JSON 🍓 //
app.use(express.json());

// SET A STATIC FOLDER 🍓 //
app.use(express.static("public"));

// ROUTERS USE WHAT 🍓 //
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// LISTEN WHERE? + TIME 👀👂🕓 //
app.listen(PORT, () => {
    console.log(`Server LIVE on port: ${PORT}; ${moment().format("MMMM Do YYYY, h:mm:ss A")}!`);
});