import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIcons from "react-native-vector-icons/EvilIcons";
const MoreBottom = (props: any) => {
    console.log(props.list);

    const navigation = useNavigation();
    const onMore = useCallback(() => { navigation.navigate("product", { list: props.list }) }, [])
    return (
        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', paddingVertical: 10 }}>
            <EvilIcons name="arrow-right" color="rgb(200,149,81)" size={20} />
            <Text style={{ color: "rgb(200,149,81)", textAlign: "center" }}>Xem thêm</Text>
        </TouchableOpacity >
    );
}

export default MoreBottom;