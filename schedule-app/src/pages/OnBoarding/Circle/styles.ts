import { Dimensions, StyleSheet } from "react-native";
import Constants from 'expo-constants'

const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  circleContainer: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#CCCCCC',
    marginRight: 10
  },
  circle: {
    flex: 1,
    borderRadius: 15,
  }
})