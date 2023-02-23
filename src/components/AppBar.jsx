import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constanst from "expo-constants";
import theme from "../thme";

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText fontWeight="bold" style={styles.text}>
        Repositories
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constanst.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});
