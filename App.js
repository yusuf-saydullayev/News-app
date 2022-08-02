import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import Home from "./Screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
      <StatusBar theme="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
