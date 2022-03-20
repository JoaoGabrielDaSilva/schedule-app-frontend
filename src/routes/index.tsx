import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { useAppSelector } from "../hooks/redux";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  const { info } = useAppSelector((state) => state.user);

  return (
    <NavigationContainer>
      {info?.id || true ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};
