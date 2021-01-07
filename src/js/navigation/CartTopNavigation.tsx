import React from "react";
import { View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import CartComplete from "../screens/cart/cartall/CartComplete";
import CartBuy from "../screens/cart/cartbuy/CartBuy";

const CartTopTab = createMaterialTopTabNavigator();

const CartTopNavigation = (props: any) => {
  return (
    <CartTopTab.Navigator initialRouteName="">
      <CartTopTab.Screen
        name="cartbuy"
        component={CartBuy}
        options={{ title: "Tất cả" }}
      />
      <CartTopTab.Screen
        name="cartcomplete"
        component={CartComplete}
        options={{ title: "Đơn đặt" }}
      />
    </CartTopTab.Navigator>
  );
};

export default CartTopNavigation;
