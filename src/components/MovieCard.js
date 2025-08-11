import { IMAGE_CDN_URL } from "../utils/Constants"

const MovieCard = ({posterPath}) => {
    return (
        <div>
            <img src={IMAGE_CDN_URL+posterPath} alt="Movie image"/>
        </div>
    )
}
export default MovieCard