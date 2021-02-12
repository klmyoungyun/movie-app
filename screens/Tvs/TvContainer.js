import React, { useState } from "react";
import { useEffect } from "react";
import { tvApi } from "../../components/Api";
import TvPresenter from "./TvPresenter";

export default () => {
  const [Tvs, setTvs] = useState({
    loading: true,
    data: {
      airingToday: [],
      onTheAir: [],
      popularTv: [],
      topRated: [],
      airingTodayError: null,
      onTheAirError: null,
      popularTvError: null,
      topRatedError: null,
    },
  });
  const getData = async () => {
    const [airingToday, airingTodayError] = await tvApi.airingToday();
    const [onTheAir, onTheAirError] = await tvApi.onTheAir();
    const [popularTv, popularTvError] = await tvApi.popularTv();
    const [topRated, topRatedError] = await tvApi.topRated();
    setTvs({
      loading: false,
      data: {
        airingToday,
        onTheAir,
        popularTv,
        topRated,
        airingTodayError,
        onTheAirError,
        popularTvError,
        topRatedError,
      },
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return <TvPresenter refreshFn={getData} {...Tvs} />;
};
