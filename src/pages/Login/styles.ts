import { StyleSheet } from "react-native";
import { ligh_theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ligh_theme.background.primary,
  },
  signUpWrapper: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    height: 1,
    flex: 1,
    backgroundColor: ligh_theme.color.gray[300],
  },
  googleWrapper: { alignSelf: "center", padding: 5, margin: 10 },
  google: {
    elevation: 3,
    backgroundColor: ligh_theme.background.primary,
    borderRadius: 30,
  },
});
