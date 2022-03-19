import React, { useEffect } from "react";
import { FlexAlignType, Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

interface Props {
  message: string;
  align?: "left" | "center" | "right";
}

const alignments: { [key: string]: FlexAlignType } = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};

const INPUT_RANGE = [0, 1];
const OUTPUT_RANGE = [0, 1];

export const ErrorMessage = ({ message, align }: Props) => {
  const error = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(error.value, INPUT_RANGE, OUTPUT_RANGE),
    };
  });

  useEffect(() => {
    error.value = withTiming(1, { duration: 200 });
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        animatedStyles,
        { alignItems: alignments[align] },
      ]}
    >
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};
