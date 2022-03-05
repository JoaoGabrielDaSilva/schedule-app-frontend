import { TextStyle } from "react-native"
import { default_theme } from "../.."

type Heading = TextStyle & {}

export const heading: Heading =  {
  fontSize: default_theme?.fontSize.xlg,
  fontWeight: 'bold',
  color: default_theme?.color.heading,
  textAlign: 'center'
}