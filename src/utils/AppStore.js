import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import MovieSlice from "./slice/MovieSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: MovieSlice,
  },
});

export default appStore;
