import React, { useLayoutEffect } from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import MovieIndex from "../screens/Movies/MovieIndex";
import TvIndex from "../screens/Tvs/TvIndex";
import SearchIndex from "../screens/Search/SearchIndex";
import MyIndex from "../screens/My/MyIndex";

const Tabs = createBottomTabNavigator();

export default ({ navigation, route }) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  useLayoutEffect(() => {
    const name = routeName || "영화";
    navigation.setOptions({
      title: name,
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";
          if (route.name === "영화") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "검색") {
            iconName += "search";
          } else if (route.name === "마이페이지") {
            iconName += "person";
          }
          return (
            <Ionicons
              name={iconName}
              size={26}
              color={focused ? "white" : "gray"}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: true,
        activeTintColor: "white",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="영화" component={MovieIndex}></Tabs.Screen>
      <Tabs.Screen name="TV" component={TvIndex}></Tabs.Screen>
      <Tabs.Screen name="검색" component={SearchIndex}></Tabs.Screen>
      <Tabs.Screen name="마이페이지" component={MyIndex}></Tabs.Screen>
    </Tabs.Navigator>
  );
};
