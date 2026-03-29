const movieCache = {};

export const getCachedMovies = (categoryId) => {
  return movieCache[categoryId] || null;
};

export const setCachedMovies = (categoryId, data) => {
  movieCache[categoryId] = data;
};