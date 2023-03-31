import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const KeywordApi = createApi({
    reducerPath: 'KeywordApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    tagTypes: ['keyword'],
    endpoints: (builder) => ({
        getKeywordDetail: builder.query({
            query: (id) => ({
                url: `/keyword/${id}?api_key=911d7a38189b44a7b26b9ffa83d37d3e`,
            }),
            providesTags: ['keyword']
        }),
        getKeywordMovie: builder.query({
            query: () => ({
                url: `/keyword/${id}/movies?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US&include_adult=false`,
            }),
            providesTags: ['keyword']
        })
    })
})


export const {useGetKeywordDetailQuery,useGetKeywordMovieQuery} = KeywordApi