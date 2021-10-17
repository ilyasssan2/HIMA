import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStack from "./MainStack";
import { colors } from "../config/colors";
import DrawerScreenContainer from "./Custome/DrawerScreenContainer";
import DrawerContent from "./Custome/DrawerContent";
import Contact from "../screens/Main/Contact";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, ViewStyle } from "react-native";
import AppText from "../components/Ui/AppText";

const Drawer = createDrawerNavigator();
const drawerItemStyle: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  marginRight: -30,
};

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "slide",
        headerShown: false,
        overlayColor: "transparent",
        sceneContainerStyle: { backgroundColor: colors.Pcolor },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: colors.Scolor,
        drawerItemStyle: {
          marginLeft: 0,
          borderRadius: 30,
          paddingLeft: 6,
          paddingVertical: 5,
        },
        drawerLabelStyle: {
          display: "none",
        },
        drawerStyle: {
          width: "auto",
        },
        //swipeEnabled: false,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="main-tabs"
        options={{
          drawerIcon: ({ size, color }) => (
            <View style={drawerItemStyle}>
              <AntDesign
                name="home"
                size={size}
                style={{ color, marginRight: 10 }}
              />
              <AppText font="md" color={color}>
                Home
              </AppText>
            </View>
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <MainStack />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="contact"
        options={{
          drawerIcon: ({ size, color }) => (
            <View style={drawerItemStyle}>
              <AntDesign
                name="infocirlceo"
                size={size}
                style={{ color, marginRight: 10 }}
              />
              <AppText font="md" color={color}>
                Contact us
              </AppText>
            </View>
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <Contact />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>

      <Drawer.Screen
        name="faq"
        options={{
          drawerIcon: ({ size, color }) => (
            <View style={drawerItemStyle}>
              <AntDesign
                name="enviromento"
                size={size}
                style={{ color, marginRight: 10 }}
              />
              <AppText font="md" color={color}>
                FAQ
              </AppText>
            </View>
          ),
        }}
      >
        {(props) => (
          <DrawerScreenContainer>
            <Contact />
          </DrawerScreenContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default MainDrawer;
