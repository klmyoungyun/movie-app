import React from "react";
import Title from "./Title";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TitleContainer = styled.View`
  margin-top: 20px;
  margin-left:20px;
`;

const VerticalSlider = ({ title, children }) => (
  <>
    <TitleContainer>
      <Title title={title} />
    </TitleContainer>
    <ScrollView contentContainerStyle={{ paddingLeft: 20 }}>
      {children}
    </ScrollView>
  </>
);

VerticalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default VerticalSlider;
