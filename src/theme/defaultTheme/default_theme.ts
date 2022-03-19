type Spacing = "sm" | "md" | "lg" | "xlg";

type FontSize = "xsm" | "sm" | "md" | "lg" | "xlg";

type Color = "primary" | "heading" | "text" | Gray;

type Background = "primary";

type Radii = "default";

type ColorWithTone = "300" | "500";

type Gray = {
  gray: ColorWithTone;
};

export type DefaultTheme = {
  background: Background;
  color: Color;
  radii: Radii;
  fontSize: FontSize;
  spacing: Spacing;
};

export const default_theme = {
  background: {
    primary: "#FFFFFF",
  },
  color: {
    primary: "#F46161",
    heading: "#000000",
    text: "#372B2B",
    gray: {
      300: "#CCCCCC",
      500: "#333333",
    },
  },
  input: {
    borderColor: {
      unFocused: "#C3C3C3",
      focused: "#333333",
    },
  },
  raddi: {
    default: 5,
  },
  fontSize: {
    xsm: 14,
    sm: 16,
    md: 20,
    lg: 25,
    xlg: 30,
  },
  spacing: {
    sm: 5,
    md: 10,
    lg: 15,
    xlg: 25,
  },
};
