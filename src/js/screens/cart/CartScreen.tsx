import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CartTopNavigation from '../../navigation/CartTopNavigation';

const CartScreen = (props: any) => {
    return (

        <View style={{ flex: 1 }}>

            <CartTopNavigation />
        </View>


    );
}

export default CartScreen;