import {
  createNavigationContainerRef,
  CommonActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigate = (route: string, params?: {}) => {
  if (!navigationRef.isReady()) return;

  navigationRef?.current?.navigate(route, params);
};
