import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Poster from "./Poster";
import Votes from "./Votes";
import { trimText } from "./Utility";

const Container = styled.View`
  margin: 20px 20px 0px 0px;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  margin: 10px 0px 5px 0px;
`;

const Vertical = ({ id, title, votes, poster, backdropPath, media }) => {
  const navigation = useNavigation();
  const goDetail = () =>
    navigation.navigate("Detail", {
      id,
      title,
      votes,
      poster,
      backdropPath,
      media,
    });
  return (
    <TouchableOpacity onPress={goDetail}>
      <Container>
        <Poster url={poster} />
        <Title>{trimText(title, 10)}</Title>
        {votes ? <Votes vote={votes} /> : null}
      </Container>
    </TouchableOpacity>
  );
};

Vertical.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  votes: PropTypes.number,
  poster: PropTypes.string.isRequired,
  backdropPath: PropTypes.string,
  media: PropTypes.string.isRequired,
};

export default Vertical;