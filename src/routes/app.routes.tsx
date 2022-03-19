import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Schedules } from "../pages/Schedules";
import { Header } from "./Header";

type RootStackParamList = {
  Schedules: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AppRoutes = () => (
  <Stack.Navigator
    initialRouteName="Schedules"
    screenOptions={{
      header: (props) => <Header {...props} />,
    }}
  >
    <Stack.Screen name="Schedules" component={Schedules} />
  </Stack.Navigator>
);
