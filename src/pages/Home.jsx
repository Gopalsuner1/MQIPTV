import { useNavigate } from "react-router-dom";
import useTVNavigation from "../hooks/useTVNavigation";
import ShowCaseCard from "../components/ShowCaseCard";

import movieicon from "../assets/movie.png";
import liveicon from "../assets/channel.png";
import showicon from "../assets/tvshow.png";

const cards = [
  { name: "LIVE Channels", id: "live", icon: liveicon },
  { name: "Movies", id: "movies", icon: movieicon },
  { name: "TV Shows", id: "shows", icon: showicon }
];

const Home = () => {
  const navigate = useNavigate();

  const focusedIndex = useTVNavigation(cards.length, (index) => {
    const selected = cards[index];
    // 🎯 Navigate based on selection
    if (selected.id === "live") navigate("/live");
    if (selected.id === "movies") navigate("/movies");
    if (selected.id === "shows") navigate("/shows");
  });

  return (
    <div className="bg-black h-screen flex items-center justify-center text-white">
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <ShowCaseCard
            key={card.id}
            name={card.name}
            icon={card.icon}
            isFocused={index === focusedIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;