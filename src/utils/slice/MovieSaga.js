import { takeLatest, call, put } from "redux-saga/effects";
import { API_OPTIONS } from "../config.js";
import { setFetchedMovies, nowPlayingSeriesList } from "../slice/MovieSlice.js";

function* fetchNowPlayingNewMovies() {
  try {
    const response = yield call(() =>
      fetch(
        "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
        API_OPTIONS
      )
    );
    const json = yield response.json();

    yield put(setFetchedMovies(json.results));
  } catch (error) {
    console.error("Error fetching Series", error);
  }
}

//Watcher Saga - It is responsible for "watching" for dispatched actions and running the corresponding worker saga when a certain action is dispatched.

function* seriesSaga() {
  yield takeLatest(nowPlayingSeriesList.type, fetchNowPlayingNewMovies);
}

export default seriesSaga;
