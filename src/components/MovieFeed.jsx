import MovieCard from "./MovieCard";

const MovieFeed = ({feedName,movies}) =>{
    return (
        <div className="w-[95%] h-fit">
            <h1 className="font-black">Hollywood Movies</h1>
            <div className="flex overflow-x-auto scroll-smooth p-2 gap-2.5">
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </div>
        </div>
    );
}
export default MovieFeed;