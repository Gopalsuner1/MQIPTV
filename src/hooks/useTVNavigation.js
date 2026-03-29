import { useEffect, useState } from "react";

const useTVNavigation = (
  length,
  onSelect,
  isActive = true,
  onBack,
  columns = 1,
  onRight // 🔥 NEW
) => {
  const [focusedIndex, setFocusedIndex] = useState(0);

  // ✅ Reset focus when list changes
  useEffect(() => {
    setFocusedIndex(0);
  }, [length]);

  useEffect(() => {
    if (!isActive || length === 0) return;

    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowDown":
          setFocusedIndex((prev) =>
            prev + columns < length ? prev + columns : prev
          );
          break;

        case "ArrowUp":
          setFocusedIndex((prev) =>
            prev - columns >= 0 ? prev - columns : prev
          );
          break;

        case "ArrowRight":
          if (columns === 1) {
            // 👉 CATEGORY PANEL → MOVE TO MOVIES
            onRight && onRight(focusedIndex);
          } else {
            // 👉 MOVIE GRID NAVIGATION
            setFocusedIndex((prev) =>
              prev + 1 < length ? prev + 1 : prev
            );
          }
          break;

        case "ArrowLeft":
          if (columns === 1) {
            onBack && onBack();
          } else {
            setFocusedIndex((prev) => {
              if (prev % columns === 0) {
                onBack && onBack(); // 👉 go to category
                return prev;
              }
              return prev - 1;
            });
          }
          break;

        case "Enter":
          onSelect && onSelect(focusedIndex);
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [length, isActive, onBack, columns, onSelect, onRight, focusedIndex]);

  return focusedIndex;
};

export default useTVNavigation;