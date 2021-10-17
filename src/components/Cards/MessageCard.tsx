import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { colors } from "../../config/colors";
import Avatar from "../Ui/Avatar";
import AppText from "../Ui/AppText";
import { IMessage } from "../../interface/IMessage";
import { useNavigation } from "@react-navigation/core";

interface props {
  message: IMessage;
}
const MessageCard = ({ message }: props) => {
  const { navigate } = useNavigation<any>();
  const goToRoom = () => navigate("room", { user: message.user });
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={goToRoom}>
        <View style={styles.owner}>
          <Avatar uri={message.user.image} size="lg" isOnline />
          <View style={{ marginLeft: 7 }}>
            <AppText
              font="md"
              textStyle={{
                fontSize: 16,
                textTransform: "capitalize",
              }}
            >
              {message.user.username}
            </AppText>
            <AppText
              textStyle={{
                fontSize: 14,
              }}
              color={colors.txt2}
            >
              {message.message}
            </AppText>
          </View>
        </View>
        <AppText
          font="md"
          textStyle={{
            fontSize: 13,
            textTransform: "capitalize",
          }}
        >
          {message.createdAt.toLocaleDateString()}
        </AppText>
      </TouchableOpacity>
    </>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: colors.radius,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  owner: {
    flexDirection: "row",
    alignItems: "center",
    // marginBottom: 10,
  },
  title: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  imageContainer: {
    height: 150,
  },
  image: {
    width: "100%",
    maxHeight: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
});
