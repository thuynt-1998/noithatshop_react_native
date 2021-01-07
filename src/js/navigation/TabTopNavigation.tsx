import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeNavigation from "./HomeNavigation";
import AuthNavigation from "./AuthNavigation";
import CartNavigation from "./CartNavigation";

const TabTop = createMaterialBottomTabNavigator();

const TabTopNavigation = (props: any) => {
  return (
    <TabTop.Navigator
      initialRouteName="tab1"
      shifting={true}
      sceneAnimationEnabled={false}
      barStyle={{ backgroundColor: 'rgb(200,149,51)' }}
      activeColor="white"
      inactiveColor="black"
    >
      <TabTop.Screen
        name="tab1"
        component={HomeNavigation}
        options={{
          tabBarIcon: "home",
          tabBarLabel: "Trang chủ",
        }}
      />
      <TabTop.Screen
        name="tab3"
        component={CartNavigation}
        options={{
          tabBarIcon: "cart",
          tabBarLabel: "Giỏ hàng",
        }}
      />
      <TabTop.Screen
        name="tab2"
        component={AuthNavigation}
        options={{
          tabBarIcon: "account",
          tabBarLabel: "Tài khoản",
        }}
      />

    </TabTop.Navigator>
  );
};

export default TabTopNavigation;
