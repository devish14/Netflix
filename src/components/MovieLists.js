import React from "react";
import MovieCards from "./MovieCards";

const MovieLists = (props) => {
  const { title, movies } = props;
  
  if (!movies || !Array.isArray(movies)) return null;
  return (
 <div className="bg-black">
     <h1 className="text-2xl text-white font-bold p-3">{title}</h1>
     <div className="overflow-x-auto bg-black max-w-full">
     <div className="flex overflow-x-scroll gap-4 p-2">
        {movies.map((movies) => (
          <MovieCards key={movies.id} imageUrl={movies.poster_path} />
        ))}
      </div>
     </div>
 </div>
  );
};

export default MovieLists;
