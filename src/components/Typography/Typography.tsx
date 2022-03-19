import React, { ReactChild } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

type Variant = "text" | "heading";

type Align = "left" | "center" | "right";

type Props = TextStyle & {
  children: ReactChild;
  color?: string;
  style?: StyleProp<ViewStyle>;
  variant?: Variant;
  align?: Align;
};

const variants = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: "300",
    color: "#372B2B",
    lineHeight: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  },
});

import { styles } from "./styles";

export const Typography = ({
  children,
  variant = "text",
  align = "left",
  color,
  ...props
}: Props) => {
  return (
    <View {...props}>
      <Text style={[styles.text, variants[variant]]}>{children}</Text>
    </View>
  );
};
