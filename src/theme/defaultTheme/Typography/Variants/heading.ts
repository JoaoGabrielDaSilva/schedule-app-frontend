import { TextStyle } from "react-native"

type Heading = TextStyle & {}

export const heading: Heading =  {
  fontSize: 30,
  fontWeight: "bold",
  color: "#000000",
  textAlign: "center"
}