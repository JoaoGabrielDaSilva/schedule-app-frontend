import { Dimensions } from "react-native"

const {width} = Dimensions.get('screen')


export const sizes = {
    fill: {
      maxWidth: width - 40,
      width: width,
    },
    default: {
      width: width / 3,
    },
    large: {
      width: width / 2,
    },
}