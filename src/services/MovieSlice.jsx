import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
    name: 'movie',
    initialState : {popularMovie : null},
    reducers : {
        addPopular : (state,{payload}) => {
            state.popularMovie = payload;
        }
    }
})

export const {addPopular} = MovieSlice.actions;
export default MovieSlice.reducer