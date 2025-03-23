import { useSelector } from "react-redux";

import MovieLists from "./MovieLists";

const SecondaryContainer = () => {
    moviesSelector = useSelector((store)=> store?.movies )
      // console.log(moviesSelector)
    
  return (
    <div>
      <MovieLists title={"Now Playing Movies"} movies={moviesSelector?.nowPlayingMovies}/>
      <MovieLists title={"Top Rated "} movies={moviesSelector?.topRated}/>
      <MovieLists title={"Popular"} movies={moviesSelector?.popularMovie}/>
      <MovieLists title={"Upcoming"} movies={moviesSelector?.upcomingMovie}/>
      <MovieLists title={"Thriller"} movies={moviesSelector?.thrillerMovie}/>
      <MovieLists title={"Drama"} movies={moviesSelector?.dramaMovie}/>
      <MovieLists title={"Series"} movies={moviesSelector?.fetchMovies}/>
    </div>
  );
};
export default SecondaryContainer;
