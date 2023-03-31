import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const  PeopleApi = createApi({
    reducerPath: 'PeopleApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    tagTypes: ['people'],
    endpoints: (builder) => ({
        getPopularPeople: builder.query({
            query: (pageCount) => ({
                url: `/person/popular?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US&page=${pageCount ? pageCount : 1}`
            }),
            providesTags: ['people']
        }),
        getPeopleDetail: builder.query({
            query: (id) => ({
                url: `/person/${id}?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US`
            }),
            providesTags: ['people']
        }),
        getPeopleImages: builder.query({
            query: (id) => {
                url: `/person/${id}/images?api_key=911d7a38189b44a7b26b9ffa83d37d3e`
            },
            providesTags:['people']
        }),
        getMoviesCredits: builder.query({
            query: (id) => ({
                url : `/person/${id}/movie_credits?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US`
            }),
            providesTags: ['people']
        }),
        getSocialIds: builder.query({
            query: (id) => ({
                url : `/person/${id}/external_ids?api_key=911d7a38189b44a7b26b9ffa83d37d3e&language=en-US`
            }),
            providesTags: ['people']
        })
    })
})

export const{useGetPopularPeopleQuery,useGetPeopleDetailQuery,useGetPeopleImagesQuery,useGetMoviesCreditsQuery,useGetSocialIdsQuery} = PeopleApi