import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const VoteText = styled.Text`
  color: whitesmoke;
  font-weight: 500;
  font-size: 12px;
  margin-bottom: 7px;
  opacity: 0.8;
`;

const Votes = ({ vote }) => <VoteText>⭐ {vote} / 10 점</VoteText>;

Votes.propTypes = {
  vote: PropTypes.number,
};

export default Votes;
