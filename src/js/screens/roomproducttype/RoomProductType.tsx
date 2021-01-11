import React, { memo, useCallback, useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import ListEmpty from '../../contants/ListEmpty';
import RoomServices from '../../sevices/api/RoomServices';
import ProductTypeItem from './component/producttype/ProductTypeItem';
import styles from './RoomProductType.style';

const RoomProductType = (props: any) => {
    const { route } = props
    const [listPT, setListPT] = useState<Array<any> | any>([])
    const [load, setLoad] = useState(false);
    const fetchProduct = useCallback(() => {
        RoomServices.getProductType(route.params.id).then((res) => {
            if (!res.originalError) {
                setListPT(res.data);
                setLoad(true)
            }
        });
    }, [])
    useEffect(() => {
        fetchProduct()
    }, [])
    const renderItem = ({ index, item }: any) => {
        return <ProductTypeItem item={item} index={index} />
    }

    return (
        <View style={styles.container}>
            {listPT.length === 0 ?
                <ListEmpty /> :
                <FlatList
                    data={listPT}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                />
            }

        </View>
    );
}

export default memo(RoomProductType);