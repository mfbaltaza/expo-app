import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import theme from '../theme';

function Homescreen() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.mainScreenText }>Homescreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainScreenText: {
    fontSize: theme.fontSizes.mainHeading,
    color: theme.colors.textPrimary
  }
})

export default Homescreen