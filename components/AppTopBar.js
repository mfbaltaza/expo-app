import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link, useLocation } from "react-router-native";

const SectionTab = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to

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
  return (
    <View style={styles.container}>
      <SectionTab to="/">
        Home
      </SectionTab>
      <SectionTab to="/future">
        Showcase
      </SectionTab>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
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
