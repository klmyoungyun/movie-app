import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import ProfileContainer from "../../components/ProfileContainer";

const Containter = styled.View`
  flex: 1;
  background-color: black;
`;
const TopContainer = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;
const Profiles = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;
const EditButton = styled.View`
  width: 100px;
  height: 35px;
  padding: 7px 8px;
  margin: 0px 0px;
  background-color: gray;
  opacity: 0.6;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  color: white;
  font-size: 12px;
`;

const BottomContainer = styled.View`
  flex: 5;
`;

export default () => {
  return (
    <Containter>
      <TopContainer>
        <Profiles>
          <ProfileContainer
            link="https://img.lovepik.com/element/40021/0360.png_860.png"
            text="나"
          />
          <ProfileContainer
            link="https://e1.pngegg.com/pngimages/586/210/png-clipart-purple-flower.png"
            text="친구"
          />
          <ProfileContainer
            link="https://w7.pngwing.com/pngs/377/822/png-transparent-rose-pink-flowers-pink-flowers-pink-rose-white-floribunda-flower.png"
            text="새 프로필"
          />
        </Profiles>
        <TouchableOpacity>
          <EditButton>
            <ButtonText>✍ 프로필 수정</ButtonText>
          </EditButton>
        </TouchableOpacity>
      </TopContainer>
      <BottomContainer></BottomContainer>
    </Containter>
  );
};
