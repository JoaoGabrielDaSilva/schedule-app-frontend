import React from "react";
import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Variant = "contained";

type SizeMode = "min" | "sm" | "md" | "maxWidth";

type Props = TouchableOpacityProps & {
  text: string;
  onPress: () => void;
  icon?: keyof typeof Ionicons.glyphMap;
  variant?: Variant;
  padding?: string;
  background?: ColorValue;
  borderColor?: ColorValue;
  color?: ColorValue;
  borderRadius?: number;
  sizeMode?: SizeMode;
  width?: string;
  loading?: boolean;
  loaderColor?: ColorValue;
  fontSize?: number;
  iconSize?: number;
};

import { ligh_theme } from "../../../theme";

const stylesWithIcon: StyleProp<ViewStyle> = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const stylesWithoutIcon: StyleProp<ViewStyle> = { alignItems: "center" };

import { styles } from "./styles";

const sizeModes = {
  sm: 100,
  md: 200,
  maxWidth: "100%",
};

export const Button = ({
  onPress,
  text,
  variant = "contained",
  padding,
  icon,
  background,
  borderColor,
  borderRadius,
  color,
  sizeMode = "maxWidth",
  width,
  loading = false,
  loaderColor,
  fontSize,
  iconSize,
  style,
  ...props
}: Props) => {
  const containerStyles: ViewStyle = {
    backgroundColor: "#F46161" || background,
    borderColor: "#F46161" || borderColor,
    width: sizeModes[sizeMode] || width,
    height: 50,
    padding: icon ? ligh_theme.spacing.md : 0,
    justifyContent: "center",
    borderRadius: borderRadius || ligh_theme.raddi.default,
  };

  const textStyles: TextStyle = {
    color: color || "#FFFFFF",
    fontSize: fontSize || ligh_theme.fontSize.xsm,
  };

  const iconStyles: TextStyle = {
    fontSize: iconSize || ligh_theme.fontSize.md,
    color: color || "#FFFFFF",
  };

  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[style, { alignSelf: sizeMode !== "min" ? "stretch" : "auto" }]}
    >
      <View
        style={[
          styles.container,
          containerStyles,
          icon && !loading ? stylesWithIcon : stylesWithoutIcon,
        ]}
      >
        {!loading ? (
          <>
            <Text style={[styles.text, textStyles]}>{text}</Text>
            {icon ? <Ionicons name={icon} style={[iconStyles]} /> : null}
          </>
        ) : (
          <ActivityIndicator color={loaderColor || "#FFFFFF"} />
        )}
      </View>
    </TouchableOpacity>
  );
};
