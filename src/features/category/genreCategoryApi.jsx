import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const genreCategoryApi = createApi({
    reducerPath: 'genreCategoryApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    tagTypes: ['genre'],
    endpoints: (builder) => ({
        getGenres : builder.query({
            query:() => ({
                url: `/genre/movie/list?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US`,
            }),
            providesTags: ['genre'],
        })
    })
})

export const {useGetGenresQuery} = genreCategoryApi;