import { useSelector } from "react-redux";

import MovieLists from "./MovieLists";

const SecondaryContainer = () => {
    moviesSelector = useSelector((store)=> store?.movies )
    
  return (
    <div>
      <MovieLists title={"Now Playing Movies"} movies={moviesSelector?.nowPlayingMovies}/>
      <MovieLists title={"Top Rated "} movies={moviesSelector?.topRated}/>
      <MovieLists title={"Popular"} movies={moviesSelector?.popularMovie}/>
      <MovieLists title={"Upcoming"} movies={moviesSelector?.upcomingMovie}/>
      <MovieLists title={"Thriller"} movies={moviesSelector?.thrillerMovie}/>
    </div>
  );
};
export default SecondaryContainer;
