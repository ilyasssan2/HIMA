import React from "react";
import { View } from "react-native";
import AppText from "./AppText";

const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AppText>Loading...</AppText>
    </View>
  );
};

export default React.memo(Loading);
