import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MedicationItem from "../components/MedicationItem";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <MedicationItem name="비타민" memo="1정" timing="식후 30분" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});
