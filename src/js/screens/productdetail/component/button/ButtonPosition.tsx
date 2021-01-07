import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from './ButtonPosition.style';

const ButtonPosition = (props: any) => {
    const { onModal } = props
    return (
        <View style={styles.positionBottom}>
            <View style={styles.containerButtonBottom}>
                <Button
                    style={[styles.buttonBottomOne, styles.buttonBottom]}
                    contentStyle={styles.heightButtonModal}
                    mode="contained"
                    onPress={() => onModal("Thêm vào giỏ hàng")}
                >
                    <FontAwesome5 name="cart-plus" size={24} color="black" />
                </Button>
                <Button
                    style={[styles.buttonBottomTwo, styles.buttonBottom]}
                    mode="contained"
                    contentStyle={styles.heightButtonModal}
                    onPress={() => onModal("Mua ngay")}
                >
                    Mua ngay
              </Button>
            </View>
        </View>
    );
}

export default ButtonPosition;