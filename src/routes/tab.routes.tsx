import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
          // headerShown: false,
          // headerLeft: () => <Text>b</Text>,
        }
      }
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};
