const { log } = require("console");
const {
  getMovieCategory,
  getMoviesByCategory,
  getMovieInfo,
} = require("../services/MovieService");

const fetchMoviesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const movies = await getMoviesByCategory(categoryId);

    res.json(movies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};
let categoryCache = null;
let lastFetchTime = 0;
const CACHE_TIME = 60 * 60 * 1000; // 1 hour

const fatchMovieCategory = async (req, res) => {
  try {
    const now = Date.now();
    // ✅ serve from cache
    if (categoryCache && now - lastFetchTime < CACHE_TIME) {
      console.log("⚡ From cache");
      return res.json(categoryCache);
    }
    console.log("🌐 Fetching from API");

    const data = await getMovieCategory(); // your service

    // ✅ save cache
    categoryCache = data;
    lastFetchTime = now;

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed" });
  }
};
const fatchMovieInfo = async (req, res) => {
  try {
    const { streamId } = req.params;
    const movie = await getMovieInfo(streamId);

    res.json(movie);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

module.exports = { fetchMoviesByCategory, fatchMovieCategory,fatchMovieInfo };
