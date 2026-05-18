import { useSQLiteContext } from "expo-sqlite";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DATA = [
  {
    title: "08:00",
    data: [
      { id: "1", name: "비타민", memo: "1정", timing: "식후 30분" },
      { id: "2", name: "오메가3", memo: "2정", timing: "식후 30분" },
    ],
  },
  {
    title: "12:00",
    data: [
      { id: "1", name: "칼슘", memo: "1정", timing: "식후 30분" },
      { id: "2", name: "마그네슘", memo: "1정", timing: "식후 30분" },
    ],
  },
  {
    title: "18:00",
    data: [
      { id: "1", name: "비타민D", memo: "1정", timing: "식후 30분" },
      { id: "2", name: "프로바이오틱스", memo: "1정", timing: "식후 30분" },
    ],
  },
];
export default function Home() {
  const db = useSQLiteContext();
  useEffect(() => {
    (async () => {
      await db.runAsync(
        `INSERT INTO medications (name, color) VALUES (?, ?)`,
        "비타민",
        "blue",
      );
    })();
  }, []);

  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      {/* <MedicationItem
        name="비타민"
        memo="1정"
        timing="식후 30분"
        footer={<CustomButton label="추가" size="medium" />}
      /> */}
      {/* <SectionList
        sections={DATA}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <MedicationItem
            name={item.name}
            memo={item.memo}
            timing={item.timing}
            footer={<CustomButton label="추가" size="medium" />}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Typography variant="lg">{title}</Typography>
        )}
        contentContainerStyle={{ padding: 16, gap: 10 }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    backgroundColor: "#fff",
  },
});
