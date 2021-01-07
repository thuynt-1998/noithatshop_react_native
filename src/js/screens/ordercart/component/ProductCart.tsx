import { useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import styles from './ProductCart.style';

const ProductCart = (props: any) => {
    const { list, sum } = props;
    const renderItem = useCallback(({ item }) => {

        return <View style={styles.container}>
            <View style={styles.flex1}>
                <Image
                    source={{
                        uri:
                            "https://product.hstatic.net/1000409762/product/sp9-2_5cbcdc59238643d4a639ccc4278a6492_large.jpg",
                    }}
                    style={[styles.height100, styles.flex1]}
                    resizeMode="center"
                ></Image>
            </View>
            <View style={styles.flex2}>
                <Text style={styles.margin10}>{item.product.name} </Text>
                <Text style={styles.margin10}>
                    {item.price}
                </Text>
                <Text style={styles.margin10}>
                    {item.product.productDetail[0].colors} x {item.number}
                </Text>

            </View>
        </View>
    }, [list])
    return (
        <View style={{ backgroundColor: "white" }}>
            <FlatList
                data={list}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderItem}
            />
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, paddingVertical: 10 }}>
                <Text>Tổng số tiền</Text>
                <Text style={{ textAlign: "right", fontSize: 16, color: "rgb(200,149,81)" }}>
                    {sum}
                </Text>
            </View>


        </View >

    );
}

export default ProductCart;