import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { logout } from "../../store/ducks/user";

export const Schedules = () => {
  const dispatch = useDispatch();

  // dispatch(logout());

  return <SafeAreaView></SafeAreaView>;
};
