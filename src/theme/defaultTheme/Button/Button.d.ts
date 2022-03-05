import { Spacing } from "..";
import { Sizes } from "./Sizes/Sizes";
import { Variants } from "./Variants/Variants";

type GeneralButtonStyles = {
  padding: Spacing
}

export type Button = Sizes & Variants & GeneralButtonStyles
