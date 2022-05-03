import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import theme from '../theme'

function AppTopBar() {
  return (
    <View style={styles.container}>
       <Text style={styles.text}>Navbar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.black
  },
  text: {
    color: theme.colors.textPrimary
  }
})

export default AppTopBar