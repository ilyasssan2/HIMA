import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
import AppText from "./AppText";
interface props {
  headerProps: StackHeaderProps;
}
const Header: React.FC<props> = ({ headerProps }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.Icon}
        onPress={() => headerProps.navigation.goBack()}
      >
        <AntDesign size={24} name="arrowleft" color={colors.txt} />
      </TouchableOpacity>
      <View style={styles.title}>
        <AppText size="md" font="md" color={colors.txt}>
          {headerProps.options.title}
        </AppText>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 70,
    backgroundColor: "white",
    alignItems: "flex-end",
    flexDirection: "row",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // borderBottomWidth: 1.5,
    // borderColor: colors.border,
  },
  Icon: {
    zIndex: 2,
    position: "absolute",
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingBottom: 15,
    paddingLeft: 15,
  },
  title: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 15,
  },
});
