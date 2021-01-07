import React, { useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from 'react-redux';

import LoginServices from '../sevices/api/LoginServices';
import LoginScreen from '../screens/login/LoginScreen';
import SignupScreen from '../screens/signup/SignupScreen';
import EditProfile from '../screens/auth/EditProfile';

const AuthStack = createStackNavigator();
const AuthNavigation = (props: any) => {
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
        <AuthStack.Navigator >
            {token !== "" ?
                <>
                    <AuthStack.Screen name="profile" component={EditProfile}
                        options={{
                            title: "Hồ sơ",
                            // headerTitleStyle: { textAlign: "center", color: "black" },
                            // headerShown: false,
                            // headerTransparent: true,
                        }} />
                </>

                : <>
                    <AuthStack.Screen
                        name="login"
                        component={LoginScreen}
                        options={{
                            title: "Đăng nhập",
                            headerTitleStyle: { textAlign: "center", color: "black" },
                            headerShown: false,
                            headerTransparent: true,
                        }}
                    ></AuthStack.Screen>
                    <AuthStack.Screen
                        name="signup"
                        component={SignupScreen}
                        options={{
                            title: "Sign Up",
                            headerTitleStyle: { textAlign: "center", color: "white" },
                            headerShown: false,
                            headerTransparent: true,
                        }}
                    ></AuthStack.Screen>
                </>}

        </AuthStack.Navigator>
    );
}

export default AuthNavigation;