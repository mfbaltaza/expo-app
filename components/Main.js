import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Homescreen from "./Homescreen";
import FutureShowcase from "./FutureShowcase";
import AppTopBar from "./AppTopBar";

export default function Main() {
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
