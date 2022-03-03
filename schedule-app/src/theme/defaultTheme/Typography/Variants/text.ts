import { TextStyle } from "react-native"
import { default_theme } from "../.."

type Text = & TextStyle & {}

export const text: Text =  {
  fontSize: default_theme?.spacing.lg,
  fontWeight: '300',
  color: default_theme?.color.text,
  lineHeight: 20,
  textAlign: 'center'
}