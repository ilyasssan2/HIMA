import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../config/colors";
import { IMessage } from "../../interface/IMessage";
import AppText from "./AppText";

interface props {
  message: IMessage;
  isPrimary?: boolean;
}
const Message = ({ message, isPrimary }: props) => {
  return (
    <>
      <View
        style={[
          styles.container,
          isPrimary ? styles.primary : styles.secondary,
        ]}
      >
        <AppText color={isPrimary ? "white" : undefined}>
          {message.message}
        </AppText>
      </View>
      <AppText
        font="md"
        textStyle={{
          fontSize: 12,
          textTransform: "capitalize",
          marginTop: 6,
          textAlign: isPrimary ? "right" : "left",
        }}
      >
        {message.createdAt.toLocaleDateString()}
      </AppText>
    </>
  );
};

export default Message;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: colors.radius,
    maxWidth: "75%",
  },
  primary: {
    backgroundColor: colors.Pcolor,
    alignSelf: "flex-end",
  },
  secondary: {
    backgroundColor: "white",
  },
});
