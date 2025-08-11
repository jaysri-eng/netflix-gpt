const VideoTitle = ({title, overview}) => {
    return (
        <div className="absolute w-screen pt-[15%] px-12 bg-gradient-to-r from-black-200">
            <h1 className="text-4xl font-bold text-white">{title}</h1>
            <p className="py-6 text-lg w-1/3 text-white">{overview}</p>
            <div className="flex gap-10">
                <button className="p-4 my-4 w-40 bg-white bg-red-600 rounded-lg text-white">Play</button>
                <button className="p-4 my-4 bg-white bg-gray-300 rounded-lg text-black">More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle