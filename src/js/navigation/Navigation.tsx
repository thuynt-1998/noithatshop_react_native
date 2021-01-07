import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";

import LoginScreen from "../screens/login/LoginScreen";
import SignupScreen from "../screens/signup/SignupScreen";
import HomeNavigation from "./HomeNavigation";

interface StateProps {
  auth: { token: any }
}
const Stack = createStackNavigator();

const Navigation = () => {

  return (
    <Stack.Navigator initialRouteName="home">
      {/* {isLogin ? ( */}
      <Stack.Screen
        name="home"
        component={HomeNavigation}
        options={{
          title: "Trang chủ",
          headerShown: false,
          headerTransparent: true,
        }}
      ></Stack.Screen>
      {/* ) : (
          <>
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{
                title: "Đăng nhập",
                headerTitleStyle: { textAlign: "center", color: "black" },
                headerShown: false,
                headerTransparent: true,
              }}
            ></Stack.Screen>
            <Stack.Screen
              name="signup"
              component={SignupScreen}
              options={{
                title: "Sign Up",
                headerTitleStyle: { textAlign: "center", color: "white" },
                headerShown: false,
                headerTransparent: true,
              }}
            ></Stack.Screen>
          </>
        )} */}
    </Stack.Navigator>
  );
}

export default Navigation;
