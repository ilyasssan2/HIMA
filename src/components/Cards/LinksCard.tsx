import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors, MyShadow } from "../../config/colors";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ILink } from "../../interface/ILinks";
import AppText from "../Ui/AppText";
import { useNavigation } from "@react-navigation/core";

interface props {
  links: ILink[];
}
const LinksCard = ({ links }: props) => {
  const { navigate } = useNavigation<any>();
  return (
    <View style={styles.container}>
      {links.map((link, i) => (
        <TouchableOpacity
          style={[styles.link]}
          key={i}
          onPress={navigate.bind(this, link.link)}
        >
          <View style={styles.leftSide}>
            <AntDesign size={22} color={colors.txt} name={link.icon as any} />
          </View>
          <View
            style={[
              styles.rightSide,
              i !== links.length - 1 ? styles.withBorder : null,
            ]}
          >
            <AppText>{link.title}</AppText>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LinksCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: colors.radius,
    ...MyShadow,
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    //  justifyContent: "space-between",
  },
  leftSide: {
    flex: 0.15,
    alignItems: "center",
  },
  rightSide: {
    flex: 0.85,
    borderStyle: "solid",
    paddingVertical: 19,
  },
  withBorder: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
});
