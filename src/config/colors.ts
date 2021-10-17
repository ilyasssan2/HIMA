import { Platform, ViewStyle } from "react-native";

export const colors = {
  bg: "#f7f7f7",
  Pcolor: "#794CFB",
  P2color: "#f1edff",
  Scolor: "#FD9942",
  txt: "#2F4858",
  txt2: "#666666",
  border: "#F0F0F6",
  red: "#FF5842",
  red2: "#FFEDEB",
  yellow: "#FFCC11",
  yellow2: "#FFF8EA",
  light: "#F0F0F6",
  green: "#4FB491",
  green2: "#EFFCF5",
  radius: 4,
};
//2F4858
const borerShadow: ViewStyle | undefined =
  Platform.OS === "android"
    ? {
        borderWidth: 1,
        borderColor: colors.light,
        borderBottomWidth: 2,
      }
    : undefined;
export const MyShadow = {
  shadowColor: "rgba(0,0,0,0.02)",
  shadowOffset: { height: 8, width: 0 },
  shadowRadius: 16,
  shadowOpacity: 1,
  ...borerShadow,
  // elevation: 1,
};
export const MyShadowMd = {
  shadowColor: "rgba(0,0,0,0.05)",
  shadowOffset: { height: 8, width: 0 },
  shadowRadius: 16,
  shadowOpacity: 1,
  // elevation: 6,
};
