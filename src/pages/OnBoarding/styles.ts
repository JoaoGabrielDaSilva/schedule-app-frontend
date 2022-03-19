import { Dimensions, StyleSheet } from "react-native";
import Constants from 'expo-constants'
import { ligh_theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: ligh_theme.background.primary
  },
})