import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Poster from "./Poster";
import { formatDate, trimText } from "./Utility";

const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
  align-items: flex-start;
`;
const Data = styled.View`
  align-items: flex-start;
  margin-left: 20px;
  width: 60%;
`;
const Title = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 15px;
`;
const Release = styled.Text`
  color: white;
  font-size: 14px;
  padding-bottom: 15px;
`;
const Overview = styled.Text`
  color: white;
  font-size: 14px;
`;

const Horizontal = ({
  id,
  title,
  overview,
  releaseDate,
  poster,
  backdropPath,
  media,
}) => {
  const navigation = useNavigation();
  const goDetail = () =>
    navigation.navigate("Detail", { id, title, poster, backdropPath, media });
  return (
    <TouchableOpacity onPress={goDetail}>
      <Container>
        <Poster url={poster} />
        <Data>
          <Title>  {title}</Title>
          {releaseDate ? <Release>- {formatDate(releaseDate)}</Release> : null}
          <Overview>
            {overview ? `-  ${trimText(overview, 80)}` : null}
          </Overview>
        </Data>
      </Container>
    </TouchableOpacity>
  );
};

Horizontal.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string,
  poster: PropTypes.string.isRequired,
  backdropPath: PropTypes.string,
  media: PropTypes.string.isRequired,
};

export default Horizontal;
