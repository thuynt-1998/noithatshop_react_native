import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, StatusBar, ImageBackground } from "react-native";

import Creators from "../../action";
import LoginForm from "./components/LoginForm";
import { styles } from "./Login.style";

const LoginScreen = (props: { navigation: any }) => {
  const dispatch = useDispatch();

  const onLogin = useCallback(() => dispatch(Creators.login()), []);
  useEffect(() => {
    onLogin();
  }, []);

  return (
    <View style={styles.flex1}>
      <ImageBackground
        style={styles.imageBackground}
        source={{
          uri:
            "https://product.hstatic.net/1000256920/product/upload_6d065e59e1a743b9923011b7d901a14e_large.jpg",
        }}
      >
        <StatusBar backgroundColor="rgba(255,255,255,0)" translucent />

        <View style={styles.overlayImage}>
          <LoginForm navigation={props.navigation}></LoginForm>
        </View>
      </ImageBackground>
    </View>
  );
}
export default LoginScreen;
