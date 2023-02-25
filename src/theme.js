import { Platform } from "react-native";

const theme = {
  appBar: {
    primary: "#24292e",
    textSecondary: "#888",
    textPrimary: "#fff",
  },
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    secondary: "#586069",
    white: "#fff",
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
  },
  fonts: {
    main: Platform.select({
      ios:'Arial',
      android:'Roboto',
      default:'System'
    }),
  },
  fontWeigths: {
    normal: "400",
    bold: "700",
  },
};
export default theme;
