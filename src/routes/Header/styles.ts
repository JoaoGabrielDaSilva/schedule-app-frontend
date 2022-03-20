import { Dimensions, StyleSheet } from "react-native";
import { ligh_theme } from "../../theme";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    backgroundColor: ligh_theme.background.primary,
    width,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
