import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constanst from "expo-constants";
import theme from "../thme";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;
  const textStyles = [styles.text, active && styles.active];

  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={textStyles}>
        {children}
      </StyledText>
    </Link>
  );
};

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to="/">
          Repositories
        </AppBarTab>
        <AppBarTab to="/signin">Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constanst.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 15,
    marginHorizontal: 10,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingLeft: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});
