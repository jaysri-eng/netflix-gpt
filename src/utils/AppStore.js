import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
    }
})