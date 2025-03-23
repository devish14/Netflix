import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import MovieSlice from "./slice/MovieSlice";
import createSagaMiddleware from "redux-saga";
 import seriesSaga from "./slice/MovieSaga";

const sagaMiddleware = createSagaMiddleware();
const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: MovieSlice,
  },
  middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(seriesSaga)

export default appStore;
