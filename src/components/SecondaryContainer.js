import { useSelector } from "react-redux"
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movies);
    return (
        <div className="-mt-50 relative z-20">
            <MovieList title={"Now playing"} movies={movies.nowPlaying}/>
            <MovieList title={"Now playing"} movies={movies.nowPlaying}/>
            <MovieList title={"Now playing"} movies={movies.nowPlaying}/>
            <MovieList title={"Now playing"} movies={movies.nowPlaying}/>
            <MovieList title={"Now playing"} movies={movies.nowPlaying}/>
        </div>
    )
}
export default SecondaryContainer