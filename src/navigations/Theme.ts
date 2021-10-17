import { DefaultTheme } from "@react-navigation/native";
import { colors } from "../config/colors";
export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.Pcolor,
    background: colors.bg,
  },
};
