import { StyleProp, TextStyle, ViewStyle } from "react-native"

type Contained = {
  container: ViewStyle,
  text: TextStyle 
}

export const contained: Contained =  {
  container: {
    backgroundColor: '#F46161',
    borderColor: '#F46161',
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
}