const express = require("express");
const router = express.Router();

const { fetchMoviesByCategory, fatchMovieCategory, fatchMovieInfo } = require("../controllers/MovieController");

// GET /movies/:categoryId
router.get("/category", fatchMovieCategory); // ✅ first
router.get("/:categoryId", fetchMoviesByCategory); // ✅ after
router.get("/info/:streamId", fatchMovieInfo ); // ✅ after

module.exports = router;