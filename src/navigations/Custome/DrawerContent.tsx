import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/Ui/AppText";
import Avatar from "../../components/Ui/Avatar";
import Spacer from "../../components/Ui/Spacer";
import { colors } from "../../config/colors";

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
      }}
      style={styles.container}
      bounces={false}
    >
      <View style={{ flex: 0.85 }}>
        {/* <View style={styles.currentUser}>
          <Avatar
            uri={require("../../../assets/images/users/1.jpg")}
            size="xxl"
            raduis={12}
          />
          <Spacer />
          <AppText font="md" size="md" color="white">
            Ilias Boudeka
          </AppText>
        </View> */}
        {/* <Spacer size="lg" /> */}
        <View style={{ flex: 1 }}>
          <DrawerItemList {...props} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="bells" size={24} color="white" />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Pcolor,
    flex: 1,
    paddingHorizontal: 15,
  },
  currentUser: {},
});
