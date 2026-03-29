const axios = require("axios");
const { log } = require("node:console");
require("dotenv").config();

const BASE_URL = process.env.XTREAM_URL;

const params = {
  username: process.env.XTREAM_USER,
  password: process.env.XTREAM_PASS
};

const getMovieCategory = async () => {
  const res = await axios.get(BASE_URL, {
    params: { ...params, action: "get_vod_categories" }
  });
  return res.data; // ✅ return only data
};
const getMoviesByCategory = async (categoryId) => {
  const res = await axios.get(BASE_URL, {
    params: {
      ...params,
      action: "get_vod_streams",
      category_id: categoryId
    },
    timeout: 15000
  });

  return res.data;
};
const getMovieInfo = async (streamId) => {
  const res = await axios.get(BASE_URL, {
    params: {
      ...params,
      action: "get_vod_info",
      vod_id: streamId
    },
    timeout: 15000
  });

  return res.data;
};


module.exports = { getMovieCategory,getMoviesByCategory,getMovieInfo };