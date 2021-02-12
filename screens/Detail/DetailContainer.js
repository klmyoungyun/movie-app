import React, { useState } from "react";
import { useEffect, useLayoutEffect } from "react";
import { movieApi, tvApi } from "../../components/Api";
import DetailPresenter from "./DetailPresenter";

export default ({
  navigation,
  route: {
    params: { id, title, votes, poster, backdropPath, media },
  },
}) => {
  const [detail, setDetail] = useState({
    loading: true,
    data: { title, votes, poster, backdropPath },
  });
  const getMovieData = async () => {
    const [movie, movieError] = await movieApi.movie(id);
    setDetail({
      loading: false,
      data: {
        ...movie,
        title: movie.title,
        votes: movie.vote_average,
        poster: movie.poster_path,
        backdropPath: movie.backdrop_path,
      },
    });
  };
  const getTvData = async () => {
    const [tv, tvError] = await tvApi.tv(id);
    setDetail({
      loading: false,
      data: {
        ...tv,
        title: tv.name,
        votes: tv.vote_average,
        poster: tv.poster_path,
        backdropPath: tv.backdrop_path,
      },
    });
  };
  useEffect(() => {
    if (media === "movie") {
      getMovieData();
    } else if (media === "tv") {
      getTvData();
    }
  }, [id]);
  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  });
  return <DetailPresenter {...detail}/>;
};
