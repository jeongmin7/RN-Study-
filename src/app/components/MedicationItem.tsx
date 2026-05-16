import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../constants";
import Badge from "./Badge";
import Typography from "./Typography";

interface MedicationItemProps {
  header?: ReactNode;
  footer?: ReactNode;
  name: string;
  memo: string;
  timing?: string;
}

function MedicationItem({
  header,
  footer,
  name,
  memo,
  timing,
}: MedicationItemProps) {
  return (
    <View style={styles.container}>
      {header}
      <View style={styles.contentsContainer}>
        <View style={{ flex: 1, gap: 3 }}>
          <Typography variant="lg">{name}</Typography>
          <View style={styles.descriptionContainer}>
            <Typography variant="sm">{memo} </Typography>
            {timing && <Badge name={timing} />}
          </View>
        </View>
      </View>
      {footer}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.Gray100,
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 24,
    backgroundColor: "#fff",
  },
  contentsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default MedicationItem;
