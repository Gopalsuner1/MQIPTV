import { useState } from "react";
import CategerySlider from "../components/CategerySlider";
import MovieFeed from "../components/MovieFeed";

const MoviePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activePanel, setActivePanel] = useState("category");

  return (
    <div className="w-screen h-screen bg-black text-white grid grid-cols-[250px_1fr] overflow-hidden">
      
      {/* LEFT */}
      <div className="h-full overflow-hidden border-r">
        <CategerySlider
          isActive={activePanel === "category"}
          onSelect={(cat) => {
            if (selectedCategory?.category_id === cat.category_id) return;

            setSelectedCategory(cat);
            setActivePanel("movies");
          }}
        />
      </div>

      {/* RIGHT */}
      <div className="h-full overflow-hidden">
        {selectedCategory ? (
          <MovieFeed
            categoryId={selectedCategory.category_id}
            isActive={activePanel === "movies"}
            onBack={() => setActivePanel("category")}
          />
        ) : (
          <h1 className="p-4">Select a category</h1>
        )}
      </div>
    </div>
  );
};

export default MoviePage;