import { TextStyle } from "react-native"

type Text = & TextStyle & {}

export const text: Text =  {
  fontSize: 15,
  fontWeight: '300',
  color: '#372B2B',
  lineHeight: 20,
  textAlign: 'center'
}