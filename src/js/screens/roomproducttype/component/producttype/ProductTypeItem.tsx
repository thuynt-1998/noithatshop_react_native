import { useNavigation } from '@react-navigation/native';
import React, { memo, useCallback, useState, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { url } from '../../../../contants/https-base';
import RoomServices from '../../../../sevices/api/RoomServices';
import styles from './ProductTypeItem.style';

const ProductTypeItem = (props: any) => {
    const navigation = useNavigation();
    const { item, index } = props;
    const [list, setList] = useState([])


    const fecthData = useCallback(() => {
        RoomServices.getProductByTypeId(item.id).then((res: any) => {
            if (!res.originalError)
                if (res.data.length !== 0) {
                    setList(res.data)
                }
                else { }
        });
    }, [])
    useEffect(() => {
        fecthData()
    }, [])
    const constant = useCallback((style1: any, style2: any) => index % 2 === 0 ? style1 : style2, [])
    const onNavigation = useCallback(() => {
        console.log("listb" + list);
        navigation.navigate("product", { name: item.name, list: list })
    }, [list])
    return (
        <TouchableOpacity style={[styles.container, { flexDirection: constant("row", "row-reverse") }]} onPress={onNavigation}>
            <View style={styles.flex3}>
                <Image style={[styles.imageStyle, { borderTopLeftRadius: constant(10, 0), borderBottomLeftRadius: constant(10, 0) }]} source={{ uri: url + item.image }} />

            </View>
            <View style={[styles.textContainer, { paddingLeft: constant(10, 5), paddingRight: constant(5, 10) }]}>
                <Text style={{ color: "black" }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default memo(ProductTypeItem);