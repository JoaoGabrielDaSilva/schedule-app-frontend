import React from "react";
import { Dimensions, View } from "react-native";

import Animated, {
  useSharedValue,
  SharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import { ligh_theme } from "../../../theme";
import { styles } from "./styles";

const { width } = Dimensions.get("screen");

type Props = {
  index: number;
  translateX: SharedValue<number>;
};

export const Circle = ({ index, translateX }) => {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            translateX.value,
            [(index - 1) * width, width * index, (index + 1) * width],
            [0, 1.4, 0],
            {
              extrapolateLeft: Extrapolate.CLAMP,
              extrapolateRight: Extrapolate.CLAMP,
            }
          ),
        },
      ],
    };
  });

  return (
    <View style={styles.circleContainer}>
      <Animated.View
        style={[
          styles.circle,
          animatedStyles,
          { backgroundColor: ligh_theme.color.primary },
        ]}
      ></Animated.View>
    </View>
  );
};
