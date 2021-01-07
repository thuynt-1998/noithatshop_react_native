import React, { memo, useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from 'react-redux';

import HomeScreen from '../screens/home/HomeScreen';
import RoomProductType from '../screens/roomproducttype/RoomProductType';
import ProductDetailScreen from '../screens/productdetail/ProductDetailScreen';
import ProductScreen from '../screens/product/ProductScreen';
import CartScreen from '../screens/cart/CartScreen';
import LoginServices from '../sevices/api/LoginServices';
import LoginScreen from '../screens/login/LoginScreen';
import OrderCartScreen from '../screens/ordercart/OrderCartScreen';
import FormOrder from '../screens/ordercart/FormOrder';

const HomeStack = createStackNavigator();
const HomeNavigation = () => {
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
        <HomeStack.Navigator initialRouteName="home" >
            <HomeStack.Screen name="home" component={HomeScreen} options={{
                headerShown: false,
            }} />
            <HomeStack.Screen name="room" component={RoomProductType} options={({ route }: any) => ({
                title: route.params.name ? route.params.name : "",

            })} />
            <HomeStack.Screen name="product" component={ProductScreen} options={({ route }: any) => ({
                title: route.params.name ? route.params.name : "",

            })} />
            <HomeStack.Screen name="productdetail" component={ProductDetailScreen} options={{
                title: "",
                headerShown: true,
                headerTransparent: true,
            }} />
            {
                token !== "" ?
                    <>
                        <HomeStack.Screen name="cart" component={CartScreen} options={{
                            title: "Giỏ hàng",
                        }} />
                        <HomeStack.Screen name="cartorder" component={OrderCartScreen} options={{
                            title: "Thanh toán",
                        }} />
                        <HomeStack.Screen name="infoorder" component={FormOrder} options={{
                            title: "Địa chỉ nhận hàng",
                        }} />
                    </>

                    : <HomeStack.Screen name="cart" component={LoginScreen} options={{ title: "Đăng nhập" }} />
            }

        </HomeStack.Navigator>

    );
}

export default memo(HomeNavigation);