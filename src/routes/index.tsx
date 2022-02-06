import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./app.routes";
import { navigationRef } from "../services/navigationService";
import { useState } from "react";

export const Routes = () => {
  const [navigationReady, setNavigationReady] = useState(false);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => setNavigationReady(true)}
    >
      <StackRoutes />
    </NavigationContainer>
  );
};
