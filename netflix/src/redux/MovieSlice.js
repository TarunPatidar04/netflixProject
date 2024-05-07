import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    popularMovie: null,
  },
  reducers: {
    //actions
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    getpopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
  },
});

export const { getNowPlayingMovies, getpopularMovie } = movieSlice.actions; // Ensure setUser is properly exported
export default movieSlice.reducer;
