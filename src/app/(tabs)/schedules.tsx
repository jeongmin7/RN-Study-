import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Typography from "../components/Typography";

export default function Schedules() {
  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="xxl">일정</Typography>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
