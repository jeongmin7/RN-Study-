import React, { ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { colors } from "../constants";

type Variant = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
interface TypographyProps extends TextProps {
  children: ReactNode;
  variant?: Variant;
}

const variantStyles: Record<Variant, TextStyle> = {
  xxl: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 40,
  },
  xl: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
  },
  lg: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 28,
  },
  md: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
  },
  sm: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  xs: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
  },
};

function Typography({ children, variant = "md" }: TypographyProps) {
  return <Text style={[variantStyles[variant], styles.text]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.Gray900,
  },
});

export default Typography;
