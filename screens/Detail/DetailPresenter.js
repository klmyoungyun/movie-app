import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components";
import { imageApi } from "../../components/Api";
import Poster from "../../components/Poster";
import ScollContainer from "../../components/ScrollContainer";
import { formatDate } from "../../components/Utility";
import Votes from "../../components/Votes";

const Header = styled.View`
  height: ${Dimensions.get("screen").height / 4}px;
  width: 100%;
`;
const Background = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: absolute;
`;
const Container = styled.View`
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
const PosterContainer = styled.View`
  flex: 3;
  top: 50px;
  align-items: center;
  justify-content: flex-end;
`;
const Info = styled.View`
  flex: 4;
  justify-content: flex-end;
  padding-bottom: 5px;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 3px;
`;
const Contents = styled.View`
  margin-top: 70px;
  height: 100%;
  padding: 0px 30px;
`;
const DataName = styled.Text`
  color: white;
  opacity: 0.8;
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const DataValue = styled.Text`
  color: white;
  opacity: 0.7;
  font-weight: 500;
  margin-bottom: 5px;
`;

export default ({ loading, data }) => {
  return (
    <ScollContainer loading={false}>
      <Header>
        <Background source={{ uri: imageApi(data.backdropPath) }} />
        <Container>
          <PosterContainer>
            <Poster url={data.poster} />
          </PosterContainer>
          <Info>
            <Title>{data.title}</Title>
            <DataValue>{data.tagline}</DataValue>
            {data.votes ? <Votes vote={data.votes} /> : null}
          </Info>
        </Container>
        <Contents>
          {data.overview ? (
            <>
              <DataName>설명</DataName>
              <DataValue>{data.overview}</DataValue>
            </>
          ) : null}
          {data.spoken_languages ? (
            <>
              <DataName>언어</DataName>
              <DataValue>
                {data.spoken_languages.map((name) => `${name.english_name}  `)}
              </DataValue>
            </>
          ) : null}
          {data.release_date || data.first_air_date ? (
            <>
              <DataName>{data.release_date ? `개봉날짜` : `첫 방송`}</DataName>
              <DataValue>
                {formatDate(data.release_date || data.first_air_date)}
              </DataValue>
            </>
          ) : null}
        </Contents>
      </Header>
    </ScollContainer>
  );
};
