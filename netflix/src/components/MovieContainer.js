import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const { movie } = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="-mt-60 relative z-10">
        <MovieList title={"Now Playing movie"} movie="{movie.PopularMovie}" />
        <MovieList title={"Popular movie"} movie="{movie.PopularMovie}" />
      </div>
    </div>
  );
};

export default MovieContainer;
