import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import theme from '../theme';
import { Route } from "react-router-native";
import Constants from "expo-constants";

function Homescreen() {
  return (
    <Route>
      <View style={ styles.container }>
        <Text style={ styles.mainScreenText }>Homescreen</Text>
      </View>
    </Route>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Constants.statusBarHeight
  },
  mainScreenText: {
    fontSize: theme.fontSizes.mainHeading,
    color: theme.colors.textPrimary
  }
})

export default Homescreen