import { colors } from "@/constants";
import { Size } from "@/types";
import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";

type Size = "large" | "medium";
type SizeStyle = Record<Size, { viewStyle: ViewStyle; textStyle: TextStyle }>;
interface CustomButtonProps {
  label: string;
  size?: Size;
}

const sizeStyles: SizeStyle = {
  medium: {
    viewStyle: {
      width: "100%",
      height: 40,
      borderRadius: 12,
    },
    textStyle: { fontSize: 16 },
  },
  large: {
    viewStyle: {
      width: "100%",
      height: 55,
      borderRadius: 16,
    },
    textStyle: { fontSize: 16 },
  },
};
function CustomButton({ label, size = "large" }: CustomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.pressed,
        styles.container,
        sizeStyles[size].viewStyle,
      ]}
    >
      <Text style={[styles.text, sizeStyles[size].textStyle]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Blue500,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CustomButton;
