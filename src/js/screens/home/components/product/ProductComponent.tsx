import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import MoreBottom from '../../../../contants/MoreBottom';

import ProductServices from '../../../../sevices/api/ProductServices';
import ProductItem from '../../../product/component/ProductItem';

const ProductComponent = (props: any) => {
    const [list, setList] = useState([])
    const fetchData = useCallback(() => {
        ProductServices.getProductNew().then((res: any) => {
            if (!res.originalError) {
                setList(res.data);
            }
            else {
                console.log(res);
            }
        })
    }, [list])
    useEffect(() => {
        fetchData()
    }, [])

    const renderItem = useCallback(({ item }) => {
        console.log(item);
        console.log(item.productDetail);

        if (item.productDetail.length !== 0) {
            return <ProductItem
                item={item}
                price={item.productDetail[0].productPrice}
                image={item.productDetail[0].images[0].link}
                name={item.name}
                length={list.length}

            />
        }
        return <View></View>

    }, [list])

    return (
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <FlatList
                data={list}
                keyExtractor={(item: any) => item.id.toString()}
                renderItem={renderItem}
                numColumns={2}
                getItemLayout={(data, index) => ({ length: 500, offset: 500 * index, index })}
                ListFooterComponent={() => <MoreBottom list={list} />}
            />

        </View>
    );
}

export default ProductComponent;