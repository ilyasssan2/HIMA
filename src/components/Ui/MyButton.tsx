import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "../../config/colors";
import * as Haptic from "expo-haptics";
import AppText from "./AppText";

interface props {
  onPress?: () => any;
  title: string;
  type?: buttonType;
  noRaduis?: boolean;
  txtStyle?: TextStyle;
  btnStyle?: ViewStyle;
  IconLeft?: React.ReactNode;
  IconRight?: React.ReactNode;
  disabled?: boolean;
}
type buttonType = "primary" | "secondary" | "link" | "primary2";
const MyButton: React.FC<props> = ({
  onPress,
  title,
  type = "primary",
  noRaduis,
  txtStyle,
  btnStyle,
  IconLeft,
  IconRight,
  disabled,
}) => {
  const style =
    type === "secondary"
      ? styles.secondaryButtom
      : type === "link"
      ? styles.linkButtom
      : type === "primary2"
      ? styles.primary2Buttom
      : styles.primaryButtom;
  return (
    <TouchableOpacity
      onPress={async () => {
        await Haptic.impactAsync(Haptic.ImpactFeedbackStyle.Medium);
        onPress!();
      }}
      disabled={disabled}
    >
      <View
        style={{
          ...styles.button,
          ...style,
          borderRadius: !noRaduis ? colors.radius : 0,
          ...btnStyle,
          opacity: disabled ? 0.8 : 1,
        }}
      >
        {IconLeft && <View style={styles.IconLeft}>{IconLeft}</View>}
        <AppText
          textStyle={{
            ...styles.text,
            color:
              type === "primary"
                ? "white"
                : type === "primary2"
                ? colors.Pcolor
                : colors.txt2,
            ...txtStyle,
          }}
          font="md"
        >
          {title}
        </AppText>
        {IconRight && <View style={styles.IconRight}>{IconRight}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    position: "relative",
  },
  text: {
    fontSize: 16,
    textTransform: "capitalize",
    letterSpacing: 1,
  },
  primaryButtom: {
    shadowColor: colors.P2color,
    shadowOpacity: 0.9,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 30,
    backgroundColor: colors.Pcolor,
  },
  primary2Buttom: {
    shadowColor: colors.P2color,
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 0 },
    backgroundColor: colors.P2color,
  },
  secondaryButtom: {
    backgroundColor: "transparent",
    borderColor: colors.border,
    borderWidth: 1.5,
    borderStyle: "solid",
  },
  linkButtom: {
    backgroundColor: "transparent",
  },
  IconLeft: {},
  IconRight: {
    position: "absolute",
    right: 15,
  },
});
