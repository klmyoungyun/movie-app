import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { imageApi } from "./Api";

const PosterImage = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) =>
  url && <PosterImage source={{ uri: imageApi(url) }}></PosterImage>;

Poster.propTypes = {
  url: PropTypes.string
};

export default Poster;
