import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // If there are no movies, return nothing and if movies has value assign the first value to main movie

  if (!movies) return;

  const mainMovie = movies[0];
  const {original_title,overview,id} = mainMovie;
  return (
   
    <>
     <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieid={id} />
     
    </>
  );
};

export default MainContainer;
