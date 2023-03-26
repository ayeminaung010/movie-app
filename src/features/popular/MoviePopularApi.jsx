import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const MoviePopularApi = createApi({
    reducerPath: 'MoviePopularApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    tagTypes: ['popular'],
    endpoints: (builder) => ({
        getPopularMovies : builder.query({
            query: () => ({
                url : `/movie/popular?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US&page=1`,
                
            }),
            providesTags: ['popular'],
        })
    })
})

export const {useGetPopularMoviesQuery} = MoviePopularApi;