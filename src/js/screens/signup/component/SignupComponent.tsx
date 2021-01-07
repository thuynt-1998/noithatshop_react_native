import { yupResolver } from '@hookform/resolvers/yup';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Fontisto from "react-native-vector-icons/Fontisto"

import { Button, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import InputLogin from '../../components/InputLogin';
import { valid } from '../Signup.valid';
import Creators from '../../../action';
import { styles } from '../../login/Login.style';


const SignupComponent = (props: { onBack: () => any }) => {
    const { handleSubmit, errors, getValues, setError, clearErrors, control } = useForm({
        resolver: yupResolver(valid),
        defaultValues: { username: "", password: "", passwordAgain: "", account: "" }
    });
    const state = useSelector((state: any) => state)

    const dispatch = useDispatch();

    useEffect(() => { onSignup() }, [])

    const onValueConfirmPassword = useCallback((value: string, onChange: Function) => {
        if (value !== getValues("password")) {
            setError("passwordAgain", { type: "manual", message: "not equal" });
        }
        else { clearErrors("passwordAgain"); }
        onChange(value)
    }, [])
    const onSignup = useCallback(() => dispatch(Creators.signup()), [])
    const onSignupRequest = useCallback((data: any) => dispatch(Creators.signupRequest(data)), [])
    const submit = useCallback((data: any) => {
        const signupData = { phone: data.username, password: data.password, account: data.account, roles: ["ROLE_CLIENT"], code: "KH1001" }
        onSignupRequest(signupData);
    }, [])

    return (

        <View style={styles.containerContent}>
            <Controller
                control={control}
                name="username"
                render={({ onChange, value }) => (
                    <InputLogin
                        onValue={onChange}
                        errors={errors.username}
                        title="Số điện thoại"
                        left={
                            <MaterialCommunityIcons name="phone" size={20} color="rgb(120,120,120)" />
                        }
                        secureTextEntry={false}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ onChange, value }) => (
                    <InputLogin
                        onValue={onChange}
                        errors={errors.password}
                        title="Mật khẩu"
                        left={
                            <MaterialCommunityIcons
                                name="shield-lock-outline"
                                size={20}
                                color="rgb(120,120,120)"
                            />
                        }
                        secureTextEntry={true}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="passwordAgain"
                render={({ onChange, value }) => (
                    <InputLogin
                        onValue={(text: string) => { onValueConfirmPassword(text, onChange) }}
                        errors={errors.passwordAgain}
                        title="Nhập lại mật khẩu"
                        left={
                            <MaterialCommunityIcons
                                name="shield-lock-outline"
                                size={20}
                                color="rgb(120,120,120)"
                            />
                        }
                        secureTextEntry={true}
                        value={value}
                    />
                )}
            />
            <Controller
                control={control}
                name="account"
                render={({ onChange, value }) => (
                    <InputLogin
                        onValue={onChange}
                        errors={errors.account}
                        title="Nhập lại mật khẩu"
                        left={
                            <MaterialCommunityIcons name="account" size={20} color="rgb(120,120,120)" />
                        }
                        secureTextEntry={false}
                        value={value}
                    />
                )}
            />


            <Button
                onPress={handleSubmit(submit)}
                mode="contained"
                color="rgb(200,149,81)"
                labelStyle={{ color: "white" }}
                style={styles.marginVertical20}
            // disabled={isLogin}
            >
                Đăng ký
      </Button>
            <View style={styles.containerlink}>
                <Text> Bạn đã có tài khoản? </Text>
                <Button color="rgb(200,149,81)" labelStyle={styles.labelLink} onPress={props.onBack}>
                    Đăng nhập bây giờ
              </Button>
            </View>
        </View >
    );
}

export default memo(SignupComponent);