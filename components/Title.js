import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TitleText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const Title = ({ title }) => <TitleText>{title}</TitleText>;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
