import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import { useDispatch } from 'react-redux';

import ProductItem from '../../product/component/ProductItem';
import ModalProductDetail from '../../../contants/modal/ModalProductDetail';
import styles from './CartComplete.style';
import ProductServices from '../../../sevices/api/ProductServices';
import Creators from '../../../action';

const CartComplete = (props: any) => {
    const [isOpen, setOpen] = useState(false);
    const onOpen = useCallback(() => setOpen(true), []);
    const onClosed = useCallback(() => setOpen(false), []);
    const [list, setList] = useState<Array<any>>([]);
    const [data, setData] = useState("");
    const renderItem = useCallback(({ index, item }) => {
        setData(item.product);
        return (
            <View style={styles.itemProductContainer}>

                <ProductItem
                    name={item.product.name}
                    price={item.price}
                    length={list.length}
                    item={item.product}
                    image={item.product.productDetail[0].images[0].link}
                />
                <TouchableOpacity style={styles.cartIconAgain} onPress={onOpen}>
                    <AntDesign name="shoppingcart" size={20} color="white" />
                </TouchableOpacity>
            </View>

        );
    }, [list]);
    const dispatch = useDispatch();
    const fetchData = useCallback(() => {
        var item: Array<any> = []
        ProductServices.getOrderCart().then((res: any) => {
            console.log(res);
            if (!res.originalError) {
                for (var i = 0; i < res.data.length; i++) {
                    item = item.concat(res.data[i].orderCartDetails)
                }


                setList(item);
            }

        })
    }, [list])
    useEffect(() => { fetchData(); }, [])
    console.log(list);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.id.toString()}
                numColumns={2}
            />
            {isOpen && (
                <ModalProductDetail
                    isOpen={isOpen}
                    onClosed={onClosed}
                    title="Thêm vào giỏ hàng"
                    item={data}
                // onPress={onBought}
                />
            )}
        </View>
    );
}

export default memo(CartComplete);