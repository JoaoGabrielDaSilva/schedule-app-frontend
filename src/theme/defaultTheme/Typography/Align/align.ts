import { TextStyle } from "react-native"

type Align = {
  left: TextStyle,
  center: TextStyle,
  right: TextStyle,
}

export const align: Align = {
  left: {
    textAlign: 'left'
  },
  center: {
    textAlign: 'center'
  },
  right: {
    textAlign: 'right'
  }
}