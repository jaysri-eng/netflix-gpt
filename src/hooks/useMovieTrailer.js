import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constants"
import { useEffect } from "react"
import { addTrailerVideo } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useMovieTrailer = ({movieId}) => {
    const movieTrailer = useSelector((store)=>store.movies.trailerVideo);
    const dispatch = useDispatch();

    const getVideoBackground = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)        
        const json = await data.json();   
        const filterData=json.results.filter((video)=>video.type==="trailer");
        const trailer = filterData.length? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        console.log(trailer);
        console.log(trailer.key);
    }
    useEffect(()=>{
        !movieTrailer && getVideoBackground();
    },[])
}
export default useMovieTrailer