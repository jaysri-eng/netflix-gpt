import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {addNowPlayingMovies} from '../utils/moviesSlice'

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);
    const getFeed = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    }
    useEffect(()=>{
        if(!nowPlayingMovies){;
            getFeed();
        }
        // !nowPlayingMovies && getFeed();
    },[])
}