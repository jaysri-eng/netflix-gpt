import useMovieTrailer from "../hooks/useMovieTrailer"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/Constants"
import { useEffect } from "react"
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
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
        getVideoBackground();
    },[])
    return (
        <div className="w-screen">
            <iframe className="pt-0 w-screen aspect-video" title="Movie trailer" src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}></iframe>
        </div>
    )
}
export default VideoBackground