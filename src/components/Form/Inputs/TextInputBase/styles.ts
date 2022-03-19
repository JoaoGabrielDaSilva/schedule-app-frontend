import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { ligh_theme } from "../../../../theme";


export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ligh_theme.spacing.md
  }, 
  input: {
    flex: 1,
    height: 60,
    paddingLeft: 10,
  }, 
  icon: {
    fontSize: RFValue(ligh_theme.fontSize.md),
    color: ligh_theme.color.primary
  },
  eyeIcon: {
    color: ligh_theme.color.gray[500],
    fontSize: RFValue(ligh_theme.fontSize.md)
  },
  floatingLabelWrapper: {
    padding: 5,
    position: 'absolute',
    backgroundColor: ligh_theme.background.primary,
  },
  floatingLabel: {
    fontSize: RFValue(ligh_theme.fontSize.xsm),
  }
})