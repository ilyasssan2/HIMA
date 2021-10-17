import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Header from "../components/Ui/Header";
import Call from "../screens/Main/Call";
import EditProfile from "../screens/Main/EditProfile";
import Room from "../screens/Main/Room";
import MainTabs from "./MainTabs";
const Stack = createStackNavigator();
const MainStack: any = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        header: (props) => {
          return <Header headerProps={props} />;
        },
      }}
    >
      <Stack.Screen component={MainTabs} name="main" />
      <Stack.Screen component={Room} name="room" />
      <Stack.Screen component={Call} name="call" />
      <Stack.Screen
        component={EditProfile}
        name="profile-edit"
        options={{ headerShown: true, title: "Edit profile" }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
