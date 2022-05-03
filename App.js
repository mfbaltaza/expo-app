import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Homescreen from "./components/Homescreen";
import AppTopBar from "./components/AppTopBar";
import FutureShowcase from "./components/FutureShowcase";

export default function App() {
  return (
    <View style={ styles.container }>
      <AppTopBar />
      <Homescreen />
      {/* <FutureShowcase /> */}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111"
  },
});
