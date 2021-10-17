import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
import AppText from "./AppText";

interface props {
  onPress: () => any;
  label?: string;
  isSelected?: boolean;
  separator?: boolean;
}
const SelectItem = ({ onPress, label, isSelected, separator }: props) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.container,
          isSelected ? { backgroundColor: colors.P2color } : null,
        ]}
      >
        <AppText size="md">{label}</AppText>
        {isSelected && (
          <AntDesign size={22} name="check" color={colors.Pcolor} />
        )}
      </TouchableOpacity>
      {separator && <View style={styles.separator} />}
    </>
  );
};

export default SelectItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderRadius: colors.radius,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: colors.border,
    marginLeft: 15,
  },
});
