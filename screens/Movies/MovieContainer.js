import React, { useState } from "react";
import { useEffect } from "react";
import { movieApi } from "../../components/Api";
import MoviePresenter from "./MoviePresenter";

export default () => {
  const [movies, setMovies] = useState({
    loading: true,
    data: {
      nowPlaying: [],
      popularMovie: [],
      upComing: [],
      nowPlayingError: null,
      poplularError: null,
      upComingError: null,
    },
  });
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
    const [popularMovie, poplularError] = await movieApi.popularMovie();
    const [upComing, upComingError] = await movieApi.upComing();
    setMovies({
      loading: false,
      data: {
        nowPlaying,
        popularMovie,
        upComing,
        nowPlayingError,
        poplularError,
        upComingError,
      },
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return <MoviePresenter refreshFn={getData} {...movies} />;
};
