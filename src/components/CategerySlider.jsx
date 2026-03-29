import React, { useEffect, useRef, useState } from "react";
import { getMovieChategery } from "../apis/api";
import useTVNavigation from "../hooks/useTVNavigation";

const CategerySlider = ({ onSelect, isActive }) => {
  const [categery, setCategery] = useState([]);
  const itemRefs = useRef([]);

  const focusedIndex = useTVNavigation(
    categery.length,
    (index) => {
      const selected = categery[index];
      onSelect && onSelect(selected); // ENTER
    },
    isActive,
    null,
    1,
    (index) => {
      const selected = categery[index];
      onSelect && onSelect(selected); // 👉 RIGHT also selects
    }
  );

  useEffect(() => {
    const fetchCateg = async () => {
      const cached = localStorage.getItem("categories");

      if (cached) {
        setCategery(JSON.parse(cached));
        return;
      }

      try {
        const data = await getMovieChategery();
        setCategery(data || []);
        localStorage.setItem("categories", JSON.stringify(data));
      } catch (err) {
        console.error(err);
      }
    };

    fetchCateg();
  }, []);

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
  }, [categery]);

  return (
    <div className="h-full overflow-y-auto p-2 border flex flex-col gap-2">
      {categery.map((cat, index) => (
        <div
          key={cat.category_id}
          ref={(el) => (itemRefs.current[index] = el)}
          className={`p-2 rounded transition ${
            index === focusedIndex && isActive
              ? "bg-blue-600 scale-105"
              : "bg-gray-800"
          }`}
        >
          {cat.category_name}
        </div>
      ))}
    </div>
  );
};

export default CategerySlider;