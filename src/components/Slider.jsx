import { BiSolidMoviePlay, BiSolidTv } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-14 p-2 flex fixed top-0 left-0 flex-col items-center bg-[#ffdfbb] text-2xl justify-around shadow-2xl shadow-black transition-all duration-300 transform -translate-x-10 hover:translate-x-0">
      
      <button onClick={() => navigate("/")} className="cursor-pointer hover:scale-110">
        <FaHome />
      </button>

      <button onClick={() => navigate("/movie")} className="cursor-pointer hover:scale-110">
        <BiSolidMoviePlay />
      </button>

      <button onClick={() => navigate("/tv")} className="cursor-pointer hover:scale-110">
        <BiSolidTv />
      </button>

    </div>
  );
};

export default Slider;