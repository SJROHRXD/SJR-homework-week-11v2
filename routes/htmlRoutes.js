// REQUIRED / DEPENDENCIES 🍌 //
const path = require("path");
const router = require("express").Router();

// // GET NOTES PAGE //
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// GET INDEX PAGE //
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// NO ROUTE / NO PROBLEM 🍒 //
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;