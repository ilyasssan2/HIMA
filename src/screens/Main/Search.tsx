import React from "react";
import { View, StyleSheet } from "react-native";
import MyScreen from "../../components/MyScreen";
import AppText from "../../components/Ui/AppText";
import SearchInput from "../../components/Ui/SearchInput";
import SelectList from "../../components/Ui/SelectList";
import Spacer from "../../components/Ui/Spacer";

const Search = () => {
  return (
    <MyScreen>
      <View style={styles.container}>
        <Spacer size="md" />
        <AppText font="md" size="md">
          Search
        </AppText>
        <Spacer />
        <SearchInput placeholder="Search" />
        <Spacer />
        <SelectList list={["posts", "videos", "trending", "soccer", "ufc"]} />
      </View>
    </MyScreen>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
