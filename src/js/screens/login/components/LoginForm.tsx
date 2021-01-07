import React, { useCallback, useEffect, useState } from "react";
import { Text, View, Keyboard } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import { useDispatch } from "react-redux";

import { styles } from "../Login.style";
import { valid } from "../LoginForm.valid";
import InputLogin from "../../components/InputLogin";
import Creators from "../../../action";

const LoginForm = (props: { navigation: any }) => {
  const { handleSubmit, errors, control } = useForm({
    resolver: yupResolver(valid),
    defaultValues: { username: "", password: "" }
  });
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const onLoginRequest = useCallback((username: string, password: string) =>
    dispatch(Creators.loginRequest(username, password)), []
  );

  const onClickLogin = useCallback((data: { username: string; password: string }) => {
    onLoginRequest(data.username, data.password);
    Keyboard.dismiss();
    setIsLogin(true);
  }, []);
  const onSignup = useCallback(() => props.navigation.push("signup"), [])
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
              <MaterialIcons
                name="phone-android"
                size={24}
                color="rgb(120,120,120)"
              />
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
                name="shield-key-outline"
                size={24}
                color="rgb(120,120,120)"
              />
            }
            secureTextEntry={true}
            value={value}
          />
        )}
      />


      <Button
        onPress={handleSubmit(onClickLogin)}
        mode="contained"
        color="rgb(200,149,81)"
        labelStyle={{ color: "white" }}
        style={styles.marginVertical20}
      // disabled={isLogin}
      >
        Đăng nhập
      </Button>
      <View style={styles.containerlink}>
        <Text> Bạn chưa có tài khoản? </Text>
        <Button color="rgb(200,149,81)" labelStyle={styles.labelLink} onPress={onSignup}>
          Đăng kí bây giờ
              </Button>
      </View>
    </View>
  );
}

export default LoginForm;
