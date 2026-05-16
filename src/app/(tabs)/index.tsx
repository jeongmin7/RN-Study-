import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="버튼"
        onPress={() => {
          console.log("클릭됨!");
        }}
      ></Button>
      <Pressable onPress={() => router.push("/create")}>
        <Text style={styles.text}>일정 스크린으로 이동</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#009be6",
    backgroundColor: "#fff",
  },
  text: {
    color: "#009be6",
  },
});
