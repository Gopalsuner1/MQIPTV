import React, { useEffect, useRef, useState } from "react";
import useTVNavigation from "../hooks/useTVNavigation";
import { getMoviesByCategory } from "../apis/api";
import { getCachedMovies } from "../utils/cache";

const ITEMS_PER_LOAD = 40;

const MovieFeed = ({ categoryId, isActive, onBack }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const itemRefs = useRef([]);
  const loadingRef = useRef(false);

  const focusedIndex = useTVNavigation(
    visibleMovies.length,
    (index) => {
      console.log("Play:", visibleMovies[index]);
    },
    isActive,
    onBack,
    4,
  );

  // 🎬 Fetch Movies
  useEffect(() => {
    const fetchMovies = async () => {
      if (!categoryId) return;

      const cached = getCachedMovies(categoryId);

      if (cached) {
        setAllMovies(cached);
        setVisibleMovies(cached.slice(0, ITEMS_PER_LOAD));
        return;
      }

      setLoading(true);
      setVisibleMovies([]);
      itemRefs.current = [];

      try {
        const data = await getMoviesByCategory(categoryId);

        setAllMovies(data);
        setVisibleMovies(data.slice(0, ITEMS_PER_LOAD));
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    };

    fetchMovies();
  }, [categoryId]);

  // 🔥 Lazy Load
  useEffect(() => {
    if (loadingRef.current || loading) return;

    if (focusedIndex >= visibleMovies.length - 8) {
      loadingRef.current = true;

      requestAnimationFrame(() => {
        const next = allMovies.slice(0, visibleMovies.length + ITEMS_PER_LOAD);

        setVisibleMovies(next);
        loadingRef.current = false;
      });
    }
  }, [focusedIndex]);

  // 🎯 Auto scroll
  useEffect(() => {
    if (itemRefs.current[focusedIndex]) {
      itemRefs.current[focusedIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [focusedIndex]);

  useEffect(() => {
    itemRefs.current = [];
  }, [visibleMovies]);

  return (
    <div className="relative h-full overflow-y-auto p-4">
      {/* 🔥 Loader */}
      {loading && (
        <div className="absolute inset-0 bg-black/60 flex justify-center items-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      )}

      {/* 🎬 Grid */}
      <div className="grid grid-cols-4 gap-4">
        {visibleMovies.map((movie, index) => (
          <div
            key={movie.stream_id}
            ref={(el) => (itemRefs.current[index] = el)}
            className={`p-2 rounded transition ${
              index === focusedIndex && isActive
                ? "bg-blue-600 scale-105"
                : "bg-gray-800"
            }`}
          >
            <img
              src={movie.stream_icon || "/placeholder.png"}
              alt=""
              loading="lazy"
              onError={(e) => (e.target.src = "/placeholder.png")}
              className="w-full h-40 object-cover"
            />

            <p className="text-sm mt-1 line-clamp-2">{movie.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieFeed;
