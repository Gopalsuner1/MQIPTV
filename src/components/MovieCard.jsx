const MovieCard = () =>{
    return (
        <div className="h-40 min-w-30 border rounded">
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/kDfzh6QdX2tseTwwyB7lp2RP7iE.jpg" alt="Movie Poster" className="w-full h-[80%]" />
            <div>
                <h1 className="font-bold">Air Bud (1997)</h1>
            </div>
        </div>
    );
} 
export default MovieCard;