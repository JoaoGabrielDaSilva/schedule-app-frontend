import { Dimensions, StyleSheet } from "react-native";
import Constants from 'expo-constants'

const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  wrapper: {
    width,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    marginLeft: 10
  },
})