import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

interface Props {
  message: string;
}

const INPUT_RANGE = [0, 1];
const OUTPUT_RANGE = [0, 1];

export const ErrorMessage = ({ message }: Props) => {
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
    <Animated.View style={[styles.container, animatedStyles]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};
