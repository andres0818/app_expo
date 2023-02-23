import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../thme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeigths.normal,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.colors.secondary,
  },
  bold: {
    fontWeight: theme.fontWeigths.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subHeading,
  },
  textAlignCenter: {
    textAlign: "center",
  },
});

export default function StyledText({
  color,
  children,
  fontSize,
  fontWeight,
  style,
  aling,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    aling === "center" && styles.textAlignCenter,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.fontSizeSubHeading,
    fontWeight === "bold" && styles.bold,
    style
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
