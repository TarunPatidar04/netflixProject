import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);

  //custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });

  return (
    <div>
      <Header />
      <div>
        <MainContainer />
        <MovieContainer />
      </div>
    </div>
  );
};

export default Browse;
