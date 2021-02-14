import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailIndex from "../screens/Detail/DetailIndex";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomColor: "black",
          shadowColor: "black",
        },
        headerTintColor: "white",
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Tab" component={Tabs}></Stack.Screen>
      <Stack.Screen name="Detail" component={DetailIndex}></Stack.Screen>
    </Stack.Navigator>
  );
};
