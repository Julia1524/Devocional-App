import { ThemedView } from "@/components/themed-view";
import { Redirect } from "expo-router";

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <Redirect href="/(tabs)/testeScreen" />
    </ThemedView>
  );
}