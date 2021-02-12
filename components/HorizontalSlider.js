import React from "react";
import Title from "./Title";
import { ScrollView } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components/native";

const TitleContainer = styled.View`
  margin-top: 20px;
  margin-left:20px;
`;

const HorizontalSlider = ({ title, children }) => (
  <>
    <TitleContainer>
      <Title title={title} />
    </TitleContainer>
    <ScrollView
      contentContainerStyle={{ marginTop: 5, paddingLeft: 20 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  </>
);

HorizontalSlider.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default HorizontalSlider;