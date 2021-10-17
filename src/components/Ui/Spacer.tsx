import React from "react";
import { View } from "react-native";
interface props {
  size?: sizeType;
}
type sizeType = "lg" | "md" | "sm";
const Spacer: React.FC<props> = ({ size }) => {
  return (
    <View
      style={{
        height: size == "lg" ? 40 : size == "md" ? 25 : 15,
        width: "100%",
      }}
    ></View>
  );
};

export default Spacer;
