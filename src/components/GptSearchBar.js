import { useRef } from "react"
import { openAi } from "../utils/openAi";
import { API_OPTIONS } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
    const input = useRef(null);
    const dispatch = useDispatch();
    const fetchMovie = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}include_adult=false&language=en-US&page=1`,API_OPTIONS);
        const json = await data.json();
        return json.results;
    }
    const handleSearchClick = async () => {
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query :"+input.current.value+". Only give me names of 5 movies, comma separated like the example result given. Example result: Oppenheimer, Coolie, Superman, The Batman";
        const response = await openAi.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{role:"user",content:gptQuery}]
        });
        if (!response.choices){

        } 
        const gptMovies = response.choices?.[0]?.message.content.split(',');
        const promiseArray = gptMovies.map((movie)=>fetchMovie(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    }
    return (
        <div className="shadow-lg shadow-black">
            <div className="absolute">
                <img 
            className=""
            src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg" 
            alt="Logo"/>
            </div>
            <form className="p-6 flex items-center justify-center relative pt-[10%]" onSubmit={(e)=>e.preventDefault()}>
                <input type="text" ref={input} className="p-4 m-4 w-1/2 rounded-lg py-3" placeholder="What would you like to watch today?"/>
                <button className="py-3 px-4 bg-red-600 text-white rounded-lg" onClick={handleSearchClick}>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar