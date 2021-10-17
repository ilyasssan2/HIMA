import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";
import AppText from "../../components/Ui/AppText";

const Call = () => {
  return (
    <ImageBackground
      source={require("../../../assets/images/posts/2.jpg")}
      style={{ flex: 1 }}
      resizeMode={"cover"}
    >
      <BlurView intensity={70} tint="dark" style={styles.container}>
        <AppText color="white">Call</AppText>
      </BlurView>
    </ImageBackground>
  );
};

export default Call;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
  },
});
