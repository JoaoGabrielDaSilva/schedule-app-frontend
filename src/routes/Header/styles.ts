import { Dimensions, StyleSheet } from "react-native";
import { ligh_theme } from "../../theme";
import {RFValue} from 'react-native-responsive-fontsize'


const { width} = Dimensions.get('screen')


export const styles = StyleSheet.create({
  container: {
    backgroundColor: ligh_theme.background.primary,
    width,
    height: 70,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: RFValue(ligh_theme.fontSize.md)
  }
})