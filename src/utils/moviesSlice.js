import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        removeMovies: (state,action)=>{
            state.nowPlayingMovies = null;
        }
    }
})
export const {addNowPlayingMovies, removeMovies} = moviesSlice.actions;
export default moviesSlice.reducer;