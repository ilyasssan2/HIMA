import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../screens/Authentication/Login";
import Signup from "../screens/Authentication/Signup";
const Stack = createStackNavigator();
const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="login" />
      <Stack.Screen component={Signup} name="signup" />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
