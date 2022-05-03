import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

const SectionTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <View style={styles.container}>
        <Text style={styles.text}> {children} </Text>
      </View>
    </Link>
  );
};

function AppTopBar() {
  return (
    <View style={styles.container}>
      <SectionTab active to="/">
        Home
      </SectionTab>
      <SectionTab active to="/future">
        Showcase of the week
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
});

export default AppTopBar;
