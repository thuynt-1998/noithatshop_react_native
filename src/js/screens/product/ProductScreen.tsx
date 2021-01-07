import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import ListEmpty from '../../contants/ListEmpty';
import RoomServices from '../../sevices/api/RoomServices';
import ProductItem from './component/ProductItem';
import styles from './Product.style';

const ProductScreen = (props: any) => {
    const { route } = props;
    const [listProduct, setListProduct] = useState<Array<any> | any>([])
    console.log("list" + route.params.list);
    console.log(route);


    useEffect(() => {
        setListProduct(route.params.list)
    }, [])
    const renderItem = useCallback(({ item }) => {
        console.log(item);
        return item.productDetail[0] && <ProductItem
            name={item.name}
            price={item.productDetail[0].productPrice}
            length={item.productDetail.length}
            item={item}
            image={!item.productDetail[0].images[0] ? "" : item.productDetail[0].images[0].link}
        />

    }, [])

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
                {listProduct && listProduct.length === 0 ?
                    <ListEmpty /> : <FlatList
                        data={listProduct}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        numColumns={2}
                    />}

            </View>
        </View>

    );
}

export default ProductScreen;