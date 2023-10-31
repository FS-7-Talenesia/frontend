import { extendTheme } from "@chakra-ui/react";

const colors = {
  steelBlue: "#505CA9",
  leafGreen: "#29B574",
  babyGreen: "#6DC49B",
  deepBlueSea: "#2C388C",
  skyBlue: "#30C3EE",
  dark: {
    100: "#2C2C2C",
    80: "#505050",
  },
  statusRed: "#F84E4E",
  statusOrange: "#FF6B00",
  statusGreen: "#47D655",
  light: {
    100: "#FFFFFF",
    80: "#F5F5F5",
  },
};

const textStyles = {
  h1: {
    fontFamily: "Overlock",
    fontSize: "32px",
    fontWeight: "bold",
  },
  h2: {
    fontFamily: "Overlock",
    fontSize: "24px",
    fontWeight: "bold",
  },
  h3: {
    fontFamily: "Overlock",
    fontSize: "20px",
    fontWeight: "bold",
  },
  h4: {
    fontFamily: "Overlock",
    fontSize: "16px",
    fontWeight: "bold",
  },
  h5: {
    fontFamily: "Overlock",
    fontSize: "14px",
    fontWeight: "bold",
  },
  body1Bold: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "Bold",
  },
  body1Semi: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "SemiBold",
  },
  body1Normal: {
    fontFamily: "Roboto",
    fontSize: "16px",
    fontWeight: "Normal",
  },
  body2Bold: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "Bold",
  },
  body2Semi: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "SemiBold",
  },
  body2Normal: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "Normal",
  },
  caption1Bold: {
    fontFamily: "Overlock",
    fontSize: "12px",
    fontWeight: "Bold",
  },
  caption1Normal: {
    fontFamily: "Overlock",
    fontSize: "12px",
    fontWeight: "Normal",
  },
  caption2Bold: {
    fontFamily: "Overlock",
    fontSize: "10px",
    fontWeight: "Bold",
  },
  caption2Normal: {
    fontFamily: "Overlock",
    fontSize: "10px",
    fontWeight: "Normal",
  },
  linkLarge: {
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: "Bold",
    color: "#30C3EE",
  },
  linkNormal: {
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "Bold",
    color: "#30C3EE",
  },
};

const theme = extendTheme({ colors, textStyles });

export default theme;
