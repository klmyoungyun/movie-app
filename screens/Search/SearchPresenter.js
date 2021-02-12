import React from "react";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScollContainer from "../../components/ScrollContainer";
import Vertical from "../../components/Vertical";
import Input from "./Input";

export default ({ movie, tv, value, onChange, onSubmit }) => {
  return (
    <ScollContainer refreshFn={onSubmit} loading={false}>
      <Input
        value={value}
        placeholder="검색"
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movie !== null && movie.length !== 0 && (
        <HorizontalSlider title={"영화 검색 결과"}>
          {movie.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path || movie.backdrop_path}
            />
          ))}
        </HorizontalSlider>
      )}
      {tv !== null && tv.length !== 0 && (
        <HorizontalSlider title={"TV 검색 결과"}>
          {tv.map((tv) => (
            <Vertical
              key={tv.id}
              id={tv.id}
              title={tv.name}
              poster={tv.poster_path || tv.backdrop_path}
            />
          ))}
        </HorizontalSlider>
      )}
    </ScollContainer>
  );
};
