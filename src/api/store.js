import { configureStore } from "@reduxjs/toolkit";
import { genreCategoryApi } from "../features/category/genreCategoryApi";
import { KeywordApi } from "../features/keywords/KeywordApi";
import { PeopleApi } from "../features/people/PeopleApi";
import { MoviePopularApi } from "../features/popular/MoviePopularApi";
import MovieSlice from "../services/MovieSlice";

export const store = configureStore({
    reducer: {
        [MoviePopularApi.reducerPath] : MoviePopularApi.reducer,
        [genreCategoryApi.reducerPath] : genreCategoryApi.reducer,
        [PeopleApi.reducerPath] : PeopleApi.reducer,
        [KeywordApi.reducerPath] : KeywordApi.reducer,
        movie : MovieSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(MoviePopularApi.middleware,genreCategoryApi.middleware,PeopleApi.middleware,KeywordApi.middleware),
})