import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import PropTypes from "prop-types";

const Profile = styled.View`
  justify-content: center;
  align-content: center;
`;
const Button = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  justify-content: center;
  align-items: center;
  margin: 20px 10px 5px 10px;
`;
const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-size: 12px;
`;
const ProfileContainer = ({ link, text }) => {
  return (
    <Profile>
      <TouchableOpacity>
        <Button source={{ uri: link }}></Button>
        <ButtonText>{text}</ButtonText>
      </TouchableOpacity>
    </Profile>
  );
};

ProfileContainer.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProfileContainer;
