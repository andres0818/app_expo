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
  colorSecundary: {
    color: theme.colors.secondary,
  },
  bold: {
    fontWeight: theme.fontWeigths.bold,
  },
  subheading: {
    fontSize: theme.fontSizes.subHeading,
  },
});

export default function StyledText({
  color,
  children,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    color === "primary" && styles.colorPrimary,
    color === "secondary" && styles.colorSecondary,
    fontSize === "subheading" && styles.fontSizeSubHeading,
    fontWeight === "bold" && styles.bold,
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
