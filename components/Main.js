import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Homescreen from "./Homescreen";
import FutureShowcase from "./FutureShowcase";
import AppTopBar from "./AppTopBar";
import { Switch, Route, Redirect } from "react-router-native";

function Main() {
  return (
    <View style={styles.container}>
      <AppTopBar />
      <Switch>
        <Route path="/" exact>
          <Homescreen />
        </Route>
        <Route path="/future" exact>
          <FutureShowcase />
        </Route>
        <Redirect to="/"></Redirect>
      </Switch>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111111",
  },
});

export default Main;
