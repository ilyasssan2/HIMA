import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Host } from "react-native-portalize";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import Root from "./src/navigations/Root";
import { Theme } from "./src/navigations/Theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
  if (!fontsLoaded) return <AppLoading />;
  return (
    <NavigationContainer theme={Theme}>
      <Host>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <Root />
        </KeyboardAvoidingView>
      </Host>
    </NavigationContainer>
  );
}
