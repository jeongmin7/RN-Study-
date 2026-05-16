import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BadgeProps {
  name: string;
}

function Badge({ name }: BadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3f5ff",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },

  text: {
    fontSize: 12,
    color: "#7990f8",
    fontWeight: 600,
  },
});

export default Badge;
