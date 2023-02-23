import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constanst from "expo-constants";
import theme from "../thme";
import { Link } from "react-router-native";

const AppBarTab = ({ active, children, to }) => {
  return (
    <Link to={to}>
      <StyledText fontWeight="bold" style={styles.text}>
        {children}
      </StyledText>
    </Link>
  );
};

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab active to='/'>Repositories</AppBarTab>
      <AppBarTab active to='/singin'>Singin</AppBarTab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    backgroundColor: theme.appBar.primary,
    paddingTop: Constanst.statusBarHeight + 10,
    paddingBottom: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
    paddingLeft:10
  },
});
