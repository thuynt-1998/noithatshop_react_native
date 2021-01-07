import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import ProductServices from '../../../../sevices/api/ProductServices';
import HeaderTitle from '../headertitle/HeaderTitle';
import CategoryItem from './CategoryItem';

const CategoryComponent = (props: any) => {
    const [list, setList] = useState<Array<any>>([])
    const fetchData = useCallback(() => {
        ProductServices.getProductTypeAll().then((res: any) => {
            if (!res.originalError) {
                setList(res.data);
            }
            else {
                console.log(res);
            }

        })
    }, [])
    useEffect(() => {
        fetchData()
    }, [])
    const renderItem = useCallback(({ item }: any) => {
        return <CategoryItem item={item} />

    }, [list])
    return (
        <View>
            <HeaderTitle label="Danh mục" />

            <View>
                <FlatList
                    data={list}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    horizontal
                />
            </View>
        </View>
    );
}

export default CategoryComponent;