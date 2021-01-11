import React, { memo, useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from 'react-redux';

import LoginServices from '../sevices/api/LoginServices';
import CartBuy from '../screens/cart/cartbuy/CartBuy';
import LoginScreen from '../screens/login/LoginScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
const CartStack = createStackNavigator();
const CartNavigation = (props: any) => {
    const [token, setToken] = useState("");
    const isLogin = useSelector((state: any) => {
        return state.auth.token !== "" ? true : false;
    });

    const fetchAuth = useCallback(() => {
        LoginServices.getItem().then((res) => {
            if (res) {
                setToken(res)
            }
            else {
                console.log("null" + res);
            }
        });

    }, [])
    const fetchAuthRemo = useCallback(() => {
        LoginServices.removeItem();
    }, [])
    useEffect(() => { fetchAuth(); }, [token, isLogin])
    return (
        <CartStack.Navigator>
            {token && token !== "" ?
                <CartStack.Screen name="cart" component={() =>
                    <SafeAreaView style={{ flex: 1 }}>
                        <StatusBar backgroundColor="rgb(200,149,81)" />
                        <CartBuy />
                    </SafeAreaView>} options={{ title: "Giỏ hàng", headerShown: false }} />
                : <CartStack.Screen name="login" component={LoginScreen} options={{ title: "Đăng nhập", headerShown: false }} />
            }
        </CartStack.Navigator>

    );
}

export default CartNavigation;