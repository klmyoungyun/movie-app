import React from "react";
import ScollContainer from "../../components/ScrollContainer";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import VerticalSlider from "../../components/VerticalSlider";

export default ({ refreshFn, loading, data }) => {
  return (
    <ScollContainer refreshFn={refreshFn} loading={loading}>
      <>
        <HorizontalSlider title={"오늘방송"}>
          {data.airingToday
            ? data.airingToday.map((tv) => (
                <Vertical
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  poster={tv.poster_path}
                  media={"tv"}
                ></Vertical>
              ))
            : null}
        </HorizontalSlider>

        <HorizontalSlider title={"방송중"}>
          {data.onTheAir
            ? data.onTheAir.map((tv) => (
                <Vertical
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  poster={tv.poster_path}
                  media={"tv"}
                ></Vertical>
              ))
            : null}
        </HorizontalSlider>

        <HorizontalSlider title={"인기작품"}>
          {data.popularTv
            ? data.popularTv.map((tv) => (
                <Vertical
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  poster={tv.poster_path}
                  media={"tv"}
                ></Vertical>
              ))
            : null}
        </HorizontalSlider>

        <VerticalSlider title={"순위"}>
          {data.topRated
            ? data.topRated.map((tv) => (
                <Horizontal
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  overview={tv.overview}
                  poster={tv.poster_path}
                  media={"tv"}
                ></Horizontal>
              ))
            : null}
        </VerticalSlider>
      </>
    </ScollContainer>
  );
};
