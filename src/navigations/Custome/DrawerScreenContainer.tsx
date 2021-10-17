import { useDrawerProgress } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";

const DrawerScreenContainer: React.FC = ({ children }) => {
  const progress = useDrawerProgress() as any;
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.85],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });
  return (
    <Animated.View
      style={[
        styles.container,
        {
          borderRadius,
          transform: [{ scale }],
          overflow: "hidden",
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default DrawerScreenContainer;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
