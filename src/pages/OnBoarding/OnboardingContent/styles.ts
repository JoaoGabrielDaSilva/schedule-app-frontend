import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('screen')

export const styles = StyleSheet.create({
  wrapper: {
    width,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    marginLeft: 10
  },
})