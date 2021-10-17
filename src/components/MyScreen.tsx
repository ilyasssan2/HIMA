import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  StatusBarStyle,
} from "react-native";
import { colors } from "../config/colors";
interface props {
  color?: string;
  StausBarStyle?: StatusBarStyle;
  StausBarBackgroundColor?: string;
}
const MyScreen: React.FC<props> = ({
  children,
  color,
  StausBarStyle = "dark-content",
  StausBarBackgroundColor,
}) => {
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        backgroundColor: color ? color : colors.bg,
      }}
    >
      <StatusBar
        barStyle={StausBarStyle}
        backgroundColor={StausBarBackgroundColor}
      />
      {children}
    </SafeAreaView>
  );
};

export default MyScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.bg,
  },
});
