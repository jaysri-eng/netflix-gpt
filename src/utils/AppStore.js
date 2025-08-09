import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import moviesReducer from './moviesSlice'

export const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    }
})