import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {
    return (
        <div className="pt-10 bg-black px-10">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
            <div className="flex overflow-x-scroll pt-5">
                <div className="flex gap-5">
                    {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie?.poster_path}/>)}
                </div>
            </div>
        </div>
    )
}
export default MovieList