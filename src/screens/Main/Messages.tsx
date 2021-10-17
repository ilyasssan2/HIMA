import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MyScreen from "../../components/MyScreen";
import Avatar from "../../components/Ui/Avatar";
import SearchInput from "../../components/Ui/SearchInput";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
import { Messages as MessagesData } from "../../Data/Messages";
import Spacer from "../../components/Ui/Spacer";
import MessageCard from "../../components/Cards/MessageCard";
const Messages = () => {
  return (
    <MyScreen color="white">
      <View style={styles.topContainer}>
        <SearchInput placeholder="Search" />
      </View>
      <FlatList
        style={styles.container}
        data={MessagesData}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => <MessageCard message={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer />}
      />
    </MyScreen>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  topContainer: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
