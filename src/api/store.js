import { configureStore } from "@reduxjs/toolkit";
import { genreCategoryApi } from "../features/category/genreCategoryApi";
import { MoviePopularApi } from "../features/popular/MoviePopularApi";
import MovieSlice from "../services/MovieSlice";

export const store = configureStore({
    reducer: {
        [MoviePopularApi.reducerPath] : MoviePopularApi.reducer,
        [genreCategoryApi.reducerPath] : genreCategoryApi.reducer,
        movie : MovieSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviePopularApi.middleware,genreCategoryApi.middleware),
})