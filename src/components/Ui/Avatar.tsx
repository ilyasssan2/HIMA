import React from "react";
import { Image, View } from "react-native";
import { colors } from "../../config/colors";
import AppText from "./AppText";
interface props {
  size?: sizeType;
  uri?: any;
  title?: string;
  isOnline?: boolean;
  raduis?: number;
}
type sizeType = "xxl" | "xl" | "lg" | "sm" | "md";
const Avatar = ({ uri, size, title, isOnline, raduis }: props) => {
  const imageSize =
    size === "lg"
      ? 55
      : size === "xl"
      ? 70
      : size === "xxl"
      ? 90
      : size === "md"
      ? 45
      : 35;
  return (
    <>
      {uri ? (
        <Image
          style={{
            height: imageSize,
            width: imageSize,
            borderRadius: raduis ? raduis : 50,
          }}
          //@ts-ignore
          source={uri}
        />
      ) : (
        <View
          style={{
            height: imageSize,
            width: imageSize,
            borderRadius: raduis ? raduis : 50,
            backgroundColor: colors.light,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText font="md" textStyle={{ fontSize: 20 }}>
            {title}
          </AppText>
        </View>
      )}
      {isOnline && (
        <View
          style={{
            height: imageSize / 4,
            width: imageSize / 4,
            backgroundColor: colors.green,
            borderRadius: imageSize / 2,
            transform: [
              { translateX: -(imageSize / 8) },
              { translateY: imageSize / 8 },
            ],
          }}
        />
      )}
    </>
  );
};

export default Avatar;
