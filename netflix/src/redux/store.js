import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import MovieSlice from "./MovieSlice";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie: MovieSlice,
  },
});

export default store;
