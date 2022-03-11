import React, { ReactChild } from "react";
import { StyleProp, Text, View, ViewStyle } from "react-native";
import { ligh_theme } from "../../theme";
import { Typography as TypoGraphyTypes } from "../../theme/defaultTheme/Typography/Typography";

type Props = TypoGraphyTypes &
  ViewStyle & {
    children: ReactChild;
    color?: string;
    style?: StyleProp<ViewStyle>;
  };

const typographyTheme = ligh_theme.typography;

export const Typography = ({
  children,
  variant = "text",
  align = "left",
  color,
  ...props
}: Props) => {
  const typographyVariant = typographyTheme.variant[variant];

  const typographyStyles = { ...typographyVariant, color };

  return (
    <View {...props}>
      <Text style={[typographyStyles]}>{children}</Text>
    </View>
  );
};
