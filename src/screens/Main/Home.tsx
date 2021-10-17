import React from "react";
import { View, StyleSheet, FlatList, Pressable } from "react-native";
import MyScreen from "../../components/MyScreen";
import Avatar from "../../components/Ui/Avatar";
import SearchInput from "../../components/Ui/SearchInput";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
import { Posts } from "../../Data/Posts";
import Post from "../../components/Cards/PostCard";
import Spacer from "../../components/Ui/Spacer";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const Home = () => {
  const { dispatch } = useNavigation();
  return (
    <MyScreen color="white">
      <View style={styles.topContainer}>
        <Pressable onPress={() => dispatch(DrawerActions.openDrawer())}>
          <Avatar title="A" />
        </Pressable>
        <SearchInput
          placeholder="Search"
          inputStyle={{ flex: 0.9, height: 35 }}
        />
        <AntDesign name="bells" size={24} color={colors.txt} />
      </View>
      <FlatList
        style={styles.container}
        contentContainerStyle={{ paddingVertical: 20 }}
        data={Posts}
        keyExtractor={({ id }) => String(id)}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer size="md" />}
      />
    </MyScreen>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 15,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
