import ChannelFeed from "../components/ChannelFeed";
import MovieFeed from "../components/MovieFeed";
import Result from "../components/Result";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="w-svw h-svh p-4 pl-16 flex flex-col items-center gap-4 border">
      <ChannelFeed />
      <MovieFeed />
      <Slider />
    </div>
  );
};

export default Home;