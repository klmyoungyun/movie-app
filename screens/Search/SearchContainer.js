import React, { useState } from "react";
import { movieApi, tvApi } from "../../components/Api";
import SearchPresenter from "./SearchPresenter";

export default () => {
  const [value, onChangeText] = useState("");
  const [result, setResult] = useState({
    movie: [],
    tv: [],
    movieError: null,
    tvError: null,
  });

  const onChange = (text) => onChangeText(text);
  const search = async () => {
    if (value === "") {
      return;
    }
    const [movie, movieError] = await movieApi.searchMovie(value);
    const [tv, tvError] = await tvApi.searchTv(value);
    setResult({
      movie,
      tv,
      movieError,
      tvError,
    });
  };

  return (
    <SearchPresenter
      {...result}
      value={value}
      onChange={onChange}
      onSubmit={search}
    />
  );
};
