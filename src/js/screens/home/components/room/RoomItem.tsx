import React from 'react';
import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api, { url } from '../../../../contants/https-base';
import styles from './RoomComponent.style';

const RoomItem = (props: any) => {
    const navigation = useNavigation();
    const { item } = props


    return (
        <TouchableOpacity style={styles.roomItem} onPress={() => { navigation.navigate("room", { name: item.name, id: item.id }) }}>
            <ImageBackground
                source={{ uri: url + item.image }}
                style={styles.imageStyle}
                imageStyle={[styles.imageStyle, styles.borderRadius100]}
            >
                <View
                    style={styles.overlay}
                >
                    <View style={styles.roomContainerText}>
                        <Text
                            style={styles.roomText}
                        >
                            {item.name}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

export default RoomItem;