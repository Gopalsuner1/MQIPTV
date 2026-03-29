import API from "./AxiosInstance";
import { getCachedMovies, setCachedMovies } from "../utils/cache";

export const getMovieChategery = async () => {
  try {
    const res = await API.get("/movies/category");
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getMoviesByCategory = async (categoryId) => {
  try {
    // 🔥 cache check
    const cached = getCachedMovies(categoryId);
    if (cached) {
      console.log("⚡ Movies from cache");
      return cached;
    }

    console.log("🌐 Fetching from API");

    const res = await API.get(`/movies/${categoryId}`);

    setCachedMovies(categoryId, res.data);

    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};