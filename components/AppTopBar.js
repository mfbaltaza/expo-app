import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const SectionTab = ({ active, children, to }) => {
  const textStyles = [
    styles.text, active && styles.active
  ]

  return (
    <Link to={to}>
      <View style={styles.container}>
        <Text style={textStyles}> {children} </Text>
      </View>
    </Link>
  );
};

const AppTopBar = () => {
  const { pathname } = useLocation()

  return (
    <View style={styles.container}>
      <SectionTab active={ pathname === '/' } to="/">
        Home
      </SectionTab>
      <SectionTab active={ pathname === '/future' } to="/future">
        Showcase
      </SectionTab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.black,
  },
  text: {
    color: theme.colors.textPrimary,
  },
  active: {
    color: theme.colors.mainRed
  }
});

export default AppTopBar;
