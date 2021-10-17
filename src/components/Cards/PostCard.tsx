import React, { useState } from "react";
import { TouchableOpacity, Image, Modal, StyleSheet, View } from "react-native";
import * as haptics from "expo-haptics";
import { IPost } from "../../interface/IPost";
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../config/colors";
import Avatar from "../Ui/Avatar";
import AppText from "../Ui/AppText";
import ImageViewer from "react-native-image-zoom-viewer";

interface props {
  post: IPost;
}
const ICON_SIZE = 22;
const ICON_COLOR = colors.txt2;
const Post = ({ post }: props) => {
  const [showImages, setShowImages] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const toggleShowImages = () => setShowImages(!showImages);
  const toggleLikePost = async () => {
    if (!isPostLiked)
      await haptics.impactAsync(haptics.ImpactFeedbackStyle.Medium);
    setIsPostLiked(!isPostLiked);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.owner}>
          <Avatar uri={post.user.image} />
          <AppText font="md" textStyle={{ fontSize: 14, marginLeft: 7 }}>
            {post.user.username}
          </AppText>
        </View>
        <View style={styles.title}>
          <AppText font="md" textStyle={{ fontSize: 14 }}>
            {post.title}
          </AppText>
        </View>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={toggleShowImages}
        >
          <Image source={post.images[0] as any} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.actions}>
          <View style={styles.row}>
            <AntDesign
              size={ICON_SIZE}
              name={isPostLiked ? "heart" : "hearto"}
              color={isPostLiked ? colors.red : ICON_COLOR}
              onPress={toggleLikePost}
            />
            <AppText font="md" textStyle={styles.iconText}>
              100
            </AppText>
          </View>
          <View style={styles.row}>
            <AntDesign size={ICON_SIZE} name="message1" color={ICON_COLOR} />
            <AppText font="md" textStyle={styles.iconText}>
              33
            </AppText>
          </View>
          <AntDesign size={ICON_SIZE} name="sharealt" color={ICON_COLOR} />
        </View>
      </View>
      <Modal visible={showImages} transparent={true}>
        <ImageViewer
          imageUrls={post.images.map((image) => ({
            url: "",
            props: { source: image },
          }))}
          enableImageZoom
          enableSwipeDown
          onSwipeDown={toggleShowImages}
        />
      </Modal>
    </>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: colors.radius,
  },
  owner: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  title: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  imageContainer: {
    height: 150,
  },
  image: {
    width: "100%",
    maxHeight: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 6,
    color: colors.txt2,
    fontSize: 15,
    letterSpacing: 0.5,
  },
});
