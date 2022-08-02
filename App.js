import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import { NativeRouter } from "react-router-native";
import { Routes, Route } from "react-router-dom";
import { StatusBar } from "expo-status-bar";
import Home from "./Screens/Home";
import FullPost from "./Screens/FullPost";

export default function App() {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullpost/:id" element={<FullPost />} />
        </Routes>
        <StatusBar theme="auto" />
      </SafeAreaView>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
