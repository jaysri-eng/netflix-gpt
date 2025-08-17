import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: [],
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload
        },
        removeMovies: (state,action)=>{
            state.nowPlayingMovies = [];
        }
    }
})
export const {addNowPlayingMovies, removeMovies, addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;