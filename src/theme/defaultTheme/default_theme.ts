import { sizes } from "./Button";
import { Button } from "./Button/Button";
import { contained } from "./Button";
import { align } from "./Typography/Align";
import { text, heading } from "./Typography/Variants";

export type Spacing = "sm" | "md" | "lg" | "xlg";

interface ColorWithTone {
  500?: string;
}

interface Gray {
  gray: ColorWithTone;
}

export type DefaultTheme = {
  background: "primary";
  color: "primary" | "heading" | "text" | Gray;
  radii: "default";
  fontSize: "xsm" | "sm" | "md" | "lg" | "xlg";
  spacing: Spacing;
  button: Button;
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
  button: {
    variant: {
      contained,
    },
    size: { ...sizes },
  },
  typography: {
    variant: {
      text,
      heading,
    },
    align,
  },
};
