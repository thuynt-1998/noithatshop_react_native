import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import RoomServices from '../../../../sevices/api/RoomServices';
import HeaderTitle from '../headertitle/HeaderTitle';
import styles from "./RoomComponent.style";
import RoomItem from './RoomItem';
const RoomComponent = () => {
    const [listRoom, setListRoom] = useState<Array<any> | any>([]);
    const [load, setLoad] = useState(false);
    const fetchRoom = useCallback(() => {
        RoomServices.getRoom().then(res => {
            console.log(res);
            if (!res.originalError) {
                setListRoom(res.data)
                setLoad(true)
            }
        })

    }, [])

    useEffect(() => { fetchRoom() }, [])
    const renderItem = ({ item }: any) => {
        return <RoomItem item={item} />
    }
    return (
        <View >
            <HeaderTitle label="Biến ngôi nhà thành tổ ấm" />
            <View style={styles.containerRoom}>
                <FlatList
                    data={listRoom}
                    renderItem={renderItem}
                    keyExtractor={(item: any) => item.id.toString()}
                    numColumns={2}
                />
            </View>
        </View>
    );
}

export default RoomComponent;