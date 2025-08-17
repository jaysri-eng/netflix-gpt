import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies);
    return (
        <div className="-mt-50 relative z-20">
            <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Entertainment"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Sports"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Series"} movies={movies.nowPlayingMovies}/>
        </div>
    )
}
export default SecondaryContainer