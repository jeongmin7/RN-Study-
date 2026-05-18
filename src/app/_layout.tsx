import { Stack } from "expo-router";
import * as SQLite from "expo-sqlite";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
import { Suspense } from "react";
import { ActivityIndicator, View } from "react-native";

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = (await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version")) ?? { user_version: 0 };
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    // `execAsync()` is useful for bulk queries when you want to execute altogether.
    // Note that `execAsync()` does not escape parameters and may lead to SQL injection.
    await db.execAsync(`
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE if not exists medications (
  id INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  color TEXT NOT NULL
);
`);
    currentDbVersion = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

const db = SQLite.openDatabaseAsync("test.db2");

export default function RootLayout() {
  return (
    <Suspense
      fallback={
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      }
    >
      <SQLiteProvider
        databaseName="test.db2"
        onInit={migrateDbIfNeeded}
        useSuspense
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="create" options={{ headerShown: false }} />
        </Stack>
      </SQLiteProvider>
    </Suspense>
  );
}
