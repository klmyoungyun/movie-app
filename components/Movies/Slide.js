import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { imageApi } from "../Api";
import { trimText } from "../Utility";
import Poster from "../Poster";
import Votes from "../Votes";

const Container = styled.View`
  height: 100%;
  width: 100%;
`;
const Background = styled.Image`
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: absolute;
`;
const Content = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Data = styled.View`
  width: 50%;
  align-items: flex-start;
`;
const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 7px;
`;
const VoteContainer = styled.View`
  margin-bottom: 7px;
`;
const OverView = styled.Text`
  color: whitesmoke;
  font-weight: bold;
  font-size: 12px;
  opacity: 0.7;
`;
const Button = styled.View`
  padding: 7px 8px;
  margin-top: 10px;
  background-color: #881D2E;
  opacity: 0.7;
  border-radius: 4px;
`;
const ButtonText = styled.Text`
  color: white;
`;

const Slide = ({
  id,
  overview,
  title,
  voteAverage,
  poster,
  backdropPath,
  media,
}) => {
  const navigation = useNavigation();
  const goDetail = () =>
    navigation.navigate("Detail", {
      id,
      title,
      voteAverage,
      poster,
      backdropPath,
      media,
    });
  return (
    <Container>
      <Background source={{ uri: imageApi(backdropPath) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{trimText(title, 20)}</Title>
          <VoteContainer>
            <Votes vote={voteAverage} />
          </VoteContainer>
          <OverView>{trimText(overview, 80)}</OverView>
          <TouchableOpacity onPress={goDetail}>
            <Button>
              <ButtonText>Show Details</ButtonText>
            </Button>
          </TouchableOpacity>
        </Data>
      </Content>
    </Container>
  );
};

Slide.propTypes = {
  id: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  backdropPath: PropTypes.string,
  media: PropTypes.string.isRequired,
};

export default Slide;
