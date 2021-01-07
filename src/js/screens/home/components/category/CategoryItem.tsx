import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { url } from '../../../../contants/https-base';
import RoomServices from '../../../../sevices/api/RoomServices';
import styles from './CategoryComponent.style';

const CategoryItem = (props: any) => {
    const { item } = props;
    const navigation = useNavigation()

    const [list, setList] = useState([])
    const onPress = useCallback(() => {
        console.log("list" + list);

        navigation.navigate("product", { list: list, name: item.name })
    }, [list])

    const fecthData = useCallback(() => {
        RoomServices.getProductByTypeId(item.id).then((res: any) => {
            console.log(res.originalError);
            if (!res.originalError)
                if (res.data.length !== 0) {
                    setList(res.data)
                    console.log("res" + JSON.stringify(res.data));

                    // setLoad(true)
                }
                else { }
        });


    }, [])
    useEffect(() => {
        fecthData()
    }, [])
    return (
        <TouchableOpacity style={[styles.roomButton, styles.borderRadiusTwo]} onPress={onPress} >
            <ImageBackground
                source={{ uri: url + item.image }}
                style={styles.roomImageBackground}
                imageStyle={[styles.borderRadiusTwo]}
            />
            <View
                style={styles.content}
            >
                <Text
                    style={styles.textCategory}
                >
                    {item.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default CategoryItem;