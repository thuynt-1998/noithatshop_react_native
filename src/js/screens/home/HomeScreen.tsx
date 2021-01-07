import React from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import CategoryComponent from './components/category/CategoryComponent';
import HeaderAndSlide from './components/headerAndSlide.tsx/HeaderAndSlide';
import ProductComponent from './components/product/ProductComponent';
import RoomComponent from './components/room/RoomComponent';
import { styles } from './HomeScreen.style';

const HomeScreen = () => {

    return (
        <View style={styles.flex1}>

            <StatusBar backgroundColor="rgba(255,255,255,0)" translucent />
            <View style={styles.flex1}>
                <View style={styles.container}>
                    <Searchbar
                        placeholder="Tìm kiếm sản phẩm"
                        style={styles.search}
                        value={""}
                    />
                </View>
                <ScrollView>
                    <HeaderAndSlide />
                    <View>
                        <RoomComponent />
                        <CategoryComponent />
                        <ProductComponent />
                    </View>
                </ScrollView>
            </View>

        </View>
    );
}

export default HomeScreen;