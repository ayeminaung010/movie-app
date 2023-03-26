import { configureStore } from "@reduxjs/toolkit";
import { MoviePopularApi } from "../features/popular/MoviePopularApi";
import MovieSlice from "../services/MovieSlice";

export const store = configureStore({
    reducer: {
        [MoviePopularApi.reducerPath] : MoviePopularApi.reducer,
        movie : MovieSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviePopularApi.middleware),
})