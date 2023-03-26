import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
    name: 'movie',
    initialState : {popularMovie : []},
    reducers : {
        addPopular : (state,{payload}) => {
            popularMovie.push(payload);
        }
    }
})

export const {addPopular} = MovieSlice.actions;
export default MovieSlice.reducer