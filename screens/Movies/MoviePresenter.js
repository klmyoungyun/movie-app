import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import ScollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import VerticalSlider from "../../components/VerticalSlider";

const { width, height } = Dimensions.get("screen");

const SlideContainer = styled.View`
  width: ${(props) => props.Width}px;
  height: ${(props) => props.Height / 4}px;
`;
const Container = styled.View``;

export default ({ refreshFn, loading, data }) => {
  return (
    <ScollContainer refreshFn={refreshFn} loading={loading}>
      <>
        <SlideContainer Width={width} Height={height}>
          <Swiper controlsEnabled={false} loop={true} timeout={4}>
            {data.nowPlaying
              ? data.nowPlaying.map((movie) => (
                  <Slide
                    key={movie.id}
                    id={movie.id}
                    overview={movie.overview}
                    title={movie.title}
                    voteAverage={movie.vote_average}
                    poster={movie.poster_path}
                    backdropPath={movie.backdrop_path}
                    media={"movie"}
                  ></Slide>
                ))
              : null}
          </Swiper>
        </SlideContainer>

        <Container>
          <HorizontalSlider title={"인기영화"}>
            {data.popularMovie
              ? data.popularMovie.map((movie) => (
                  <Vertical
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    votes={movie.vote_average}
                    poster={movie.poster_path}
                    backdropPath={movie.backdrop_path}
                    media={"movie"}
                  />
                ))
              : null}
          </HorizontalSlider>

          <VerticalSlider title={"개봉예정영화"}>
            {data.upComing
              ? data.upComing.map((movie) => (
                  <Horizontal
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    releaseDate={movie.release_date}
                    poster={movie.poster_path}
                    backdropPath={movie.backdrop_path}
                    media={"movie"}
                  />
                ))
              : null}
          </VerticalSlider>
        </Container>
      </>
    </ScollContainer>
  );
};
