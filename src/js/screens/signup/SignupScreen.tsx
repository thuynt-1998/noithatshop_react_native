import React, { useCallback } from 'react';
import { StatusBar, View, ImageBackground } from 'react-native';

import { styles } from '../login/Login.style';
import SignupComponent from './component/SignupComponent';


const SignupScreen = (props: { navigation: any }) => {
    const onBack = useCallback(() => props.navigation.push("login"), [])
    return (

        <View style={styles.flex1}>
            <ImageBackground
                style={styles.imageBackground}
                source={{
                    uri:
                        "https://product.hstatic.net/1000256920/product/upload_74ea77f2c5d2406b9da953692be61252_large.jpg",
                }}
            >
                <StatusBar backgroundColor="rgba(255,255,255,0)" translucent />

                <View style={styles.overlayImage}>
                    <SignupComponent onBack={onBack} ></SignupComponent>
                </View>
            </ImageBackground>
        </View>

    );
}

export default SignupScreen;