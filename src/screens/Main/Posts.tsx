import React from "react";
import { View, StyleSheet } from "react-native";
import MyScreen from "../../components/MyScreen";
import AppText from "../../components/Ui/AppText";
import SearchInput from "../../components/Ui/SearchInput";
import Spacer from "../../components/Ui/Spacer";

const Posts = () => {
  return (
    <MyScreen>
      <View style={styles.container}>
        <Spacer size="md" />
        <AppText font="md" size="md">
          Hi Posts
        </AppText>
        <Spacer />
        <SearchInput placeholder="Search" />
      </View>
    </MyScreen>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
