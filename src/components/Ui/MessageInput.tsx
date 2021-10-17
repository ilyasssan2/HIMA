import React from "react";
import { TextInput, StyleSheet, ViewStyle, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
interface props {
  placeholder?: string;
  inputStyle?: ViewStyle;
  value: string;
  onChange?: (value: string) => any;
}
const MessageInput: React.FC<props> = ({
  placeholder,
  inputStyle,
  value,
  onChange,
}) => {
  return (
    <>
      <View style={[styles.InputBox, inputStyle]}>
        <AntDesign name="message1" size={22} color={colors.txt2} />
        <TextInput
          placeholder={placeholder}
          style={styles.Input}
          onChangeText={onChange}
          value={value}
          placeholderTextColor={colors.txt2}
        />
      </View>
    </>
  );
};

export default MessageInput;

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
