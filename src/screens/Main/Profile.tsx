import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import LinksCard from "../../components/Cards/LinksCard";
import MyScreen from "../../components/MyScreen";
import Avatar from "../../components/Ui/Avatar";
import Spacer from "../../components/Ui/Spacer";
import { colors, MyShadow } from "../../config/colors";
import { Links } from "../../Data/Links";
import { useNavigation } from "@react-navigation/core";
const { height } = Dimensions.get("window");
const Profile = () => {
  const { navigate } = useNavigation<any>();
  return (
    <MyScreen color={colors.Pcolor} StausBarStyle="light-content">
      <View style={styles.topContainer}>
        <AntDesign
          size={28}
          color="white"
          name="edit"
          onPress={() => navigate("profile-edit")}
          style={{ alignSelf: "flex-end" }}
        />
        <View style={styles.avatarContainer}>
          <Avatar
            uri={require("../../../assets/images/users/1.jpg")}
            size="xxl"
          />
        </View>
      </View>
      <ScrollView style={styles.container} bounces={false}>
        <Spacer size="md" />
        <LinksCard links={Links} />
        <Spacer size="md" />
        <LinksCard
          links={[{ icon: "logout", title: "Log out", link: "logout" }]}
        />
      </ScrollView>
    </MyScreen>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingHorizontal: 15,
    paddingTop: 45,
  },
  topContainer: {
    backgroundColor: colors.Pcolor,
    padding: 15,
    height: height / 5,
    zIndex: 2,
  },
  avatarContainer: {
    padding: 3,
    backgroundColor: "white",
    borderRadius: 50,
    position: "absolute",
    bottom: -45,
    alignSelf: "center",
    ...MyShadow,
  },
});
