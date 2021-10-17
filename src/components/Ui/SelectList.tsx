import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "../../config/colors";
import AppText from "./AppText";

interface itemProps {
  item: string;
  isChecked: boolean;
  onPress: () => any;
}
const Item = ({ item, isChecked, onPress }: itemProps) => {
  return (
    <TouchableOpacity
      style={[styles.item, styles.row, isChecked ? styles.itemChecked : null]}
      onPress={onPress}
    >
      <AppText color={isChecked ? "white" : undefined}>{item}</AppText>
    </TouchableOpacity>
  );
};

interface listProps {
  list: string[];
}
const SelectList = ({ list }: listProps) => {
  const [selectedItem, setSelectedItem] = useState("");
  return (
    <FlatList
      data={list}
      horizontal
      keyExtractor={(item) => item}
      style={{ flexGrow: 0 }}
      contentContainerStyle={[styles.row]}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Item
          item={item}
          isChecked={selectedItem === item ? true : false}
          key={item}
          onPress={setSelectedItem.bind(null, item)}
        />
      )}
      ItemSeparatorComponent={() => <View style={{ width: 13 }} />}
    />
  );
};

export default SelectList;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 9,
    // borderWidth: 1,
    // borderColor: colors.border,
    backgroundColor: colors.light,
    borderRadius: colors.radius,
  },
  itemChecked: {
    backgroundColor: colors.Pcolor,
  },
});
