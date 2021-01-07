import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { url } from '../../../contants/https-base';
import ListEmpty from '../../../contants/ListEmpty';
import styles from './ProductItem.style';

const ProductItem = (props: any) => {
    const navigation = useNavigation();
    const { name, price, length, item, image } = props;
    console.log(image)
    const onPress = useCallback(() => navigation.navigate("productdetail", { data: item }), [])
    return (
        <>
            {
                length !== 0 ?
                    <TouchableOpacity style={styles.product} onPress={onPress}>
                        <View>
                            <Image
                                source={{
                                    uri: url + image,
                                }}
                                style={styles.imageProduct}
                            ></Image>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.titleProduct}>{name}</Text>
                            </View>
                            <View style={styles.priceProduct}>
                                <Text style={styles.textPrice}>{price}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    :
                    <ListEmpty />
            }
        </>

    );
}

export default ProductItem;