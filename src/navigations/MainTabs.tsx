import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Main/Home";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
import Posts from "../screens/Main/Posts";
import Search from "../screens/Main/Search";
import { colors } from "../config/colors";
import Messages from "../screens/Main/Messages";
import Profile from "../screens/Main/Profile";

const Tabs = createBottomTabNavigator();
function MainTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { borderTopWidth: 0, elevation: 0, shadowOpacity: 0 },
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        component={Home}
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign name="home" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        component={Search}
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign name="search1" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        component={Posts}
        name="add-post"
        options={{
          tabBarIcon: () => (
            <View
              style={{
                transform: [{ translateY: -25 }],
                backgroundColor: colors.Pcolor,
                borderRadius: 30,
                height: 50,
                width: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="plus" size={28} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        component={Messages}
        name="message"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign name="message1" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        component={Profile}
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{ alignItems: "center" }}>
              <AntDesign name="user" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
export default MainTabs;
