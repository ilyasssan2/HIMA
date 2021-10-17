import React, { useRef, useState } from "react";
import { View, StyleSheet, FlatList, Animated } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MyScreen from "../../components/MyScreen";
import Avatar from "../../components/Ui/Avatar";
import { colors } from "../../config/colors";
import { Messages as MessagesData } from "../../Data/Messages";
import Spacer from "../../components/Ui/Spacer";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { IUser } from "../../interface/IUser";
import AppText from "../../components/Ui/AppText";
import MessageInput from "../../components/Ui/MessageInput";
import Message from "../../components/Ui/Message";

const Room = () => {
  const {
    params: { user },
  } = useRoute<RouteProp<{ params: { user: IUser } }>>();
  const { goBack, navigate } = useNavigation<any>();
  const [messages, setMassges] = useState(MessagesData);
  const [message, setMassge] = useState("");
  const listRef = useRef<FlatList>();
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const handleBottomSheath = () => {
    Animated.spring(scaleAnimation, {
      toValue: 250,
      useNativeDriver: false,
    }).start();
  };
  const handleResetBottomSheath = () => {
    Animated.timing(scaleAnimation, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };
  const sendMessage = () => {
    if (message) {
      setMassges([
        ...messages,
        {
          ...MessagesData[0],
          id: Math.random() * 100,
          message,
        },
      ]);
      setMassge("");
    }
  };

  return (
    <MyScreen color="white">
      <View style={styles.user}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign
            name="arrowleft"
            size={28}
            onPress={goBack}
            style={{ marginRight: 20 }}
            color={colors.txt2}
          />
          <Avatar uri={user.image} size="md" isOnline />
          <AppText
            font="md"
            textStyle={{
              fontSize: 16,
              textTransform: "capitalize",
              marginLeft: 7,
            }}
          >
            {user.username}
          </AppText>
        </View>
        <AntDesign
          name="phone"
          size={28}
          color={colors.txt2}
          onPress={() => navigate("call")}
        />
      </View>
      <FlatList
        style={styles.container}
        contentContainerStyle={{ paddingVertical: 25 }}
        data={messages}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item, index }) => (
          <Message message={item} isPrimary={index % 2 === 0 ? true : false} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer />}
        onContentSizeChange={() =>
          listRef.current?.scrollToEnd({ animated: true })
        }
        ref={listRef as any}
      />
      <Animated.View
        style={[
          styles.bottomContainer,
          {
            flexShrink: scaleAnimation.interpolate({
              inputRange: [0, 250],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        <AntDesign
          size={28}
          name="link"
          color={colors.txt2}
          onPress={handleBottomSheath}
        />
        <MessageInput
          inputStyle={{ flex: 0.9, height: 40 }}
          placeholder="Write something"
          onChange={setMassge}
          value={message}
        />
        <AntDesign
          size={28}
          name="arrowright"
          color={colors.txt2}
          onPress={sendMessage}
        />
      </Animated.View>
      <Animated.View
        style={{
          height: scaleAnimation,
          position: "relative",
        }}
      >
        <AntDesign
          size={24}
          name="close"
          color={colors.txt2}
          onPress={handleResetBottomSheath}
          style={styles.closeButton}
        />
        <AppText>Hi hi</AppText>
      </Animated.View>
    </MyScreen>
  );
};

export default Room;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 15,
  },
  topContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  bottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 11,
  },
  closeButton: {
    position: "absolute",
    right: 15,
    top: 5,
    zIndex: 111,
  },
});
