import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Onboarding } from "../pages";
import { Login } from "../pages/Login/Login";
import { Header } from "./Header";
import { BottomTabs } from "./tab.routes";

type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const AuthRoutes = () => (
  <Stack.Navigator
    initialRouteName="Onboarding"
    screenOptions={{
      header: (props) => <Header {...props} />,
    }}
  >
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Onboarding"
      component={Onboarding}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);