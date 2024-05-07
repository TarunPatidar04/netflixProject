import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const title = props.title;
  const movies = props.movies;
  return (
    <div className="px-8">
      <h1 className="text-3xl text-white">{title}</h1>
      <div>
        <div className="flex items-center">
          {/* {
            movies.map((movie) => {
            return <MovieCard key={movie.id} />;
          })
          } */}
          <MovieCard/>

        </div>
      </div>
    </div>
  );
};

export default MovieList;
