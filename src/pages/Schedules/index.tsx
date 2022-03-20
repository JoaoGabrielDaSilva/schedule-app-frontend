import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { RowCalendar } from "../../components/RowCalendar";
import { logout } from "../../store/ducks/user";
import { ligh_theme } from "../../theme";

export const Schedules = () => {
  const dispatch = useDispatch();

  // dispatch(logout());

  const theme = ligh_theme;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: theme.spacing.xlg,
        backgroundColor: theme.background.primary,
      }}
    >
      <RowCalendar />
    </SafeAreaView>
  );
};
