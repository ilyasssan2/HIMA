import React from "react";
import { TextInput, StyleSheet, ViewStyle, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
interface props {
  placeholder?: string;
  inputStyle?: ViewStyle;
  onChangeText?: (value: string) => any;
}
const SearchInput: React.FC<props> = ({
  placeholder,
  inputStyle,
  onChangeText,
}) => {
  return (
    <>
      <View style={[styles.InputBox, inputStyle]}>
        <AntDesign name="search1" size={22} color={colors.txt2} />
        <TextInput
          placeholder={placeholder}
          style={styles.Input}
          onChangeText={onChangeText}
          placeholderTextColor={colors.txt2}
        />
      </View>
    </>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  InputBox: {
    borderRadius: colors.radius,
    borderColor: colors.border,
    borderStyle: "solid",
    borderWidth: 1,
    height: 45,
    paddingLeft: 15,
    fontSize: 14,
    backgroundColor: colors.light,
    flexDirection: "row",
    alignItems: "center",
  },
  Input: {
    flex: 1,
    height: "100%",
    marginLeft: 10,
  },
});
