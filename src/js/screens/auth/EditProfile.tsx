import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';

import Creators from '../../action';
import styles from './EditProfile.style';

const EditProfile = (props: any) => {
    const dispatch = useDispatch();
    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.label}> Tài khoản</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.itemList}>
                    <Text>Hồ sơ của tôi</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemList}>
                    <Text>Địa chỉ</Text>
                </TouchableOpacity>

            </View>
            <Text style={styles.label}>Hỗ trợ</Text>
            <View style={styles.container}>
                <TouchableOpacity style={styles.itemList}>
                    <Text>Điều khoản sử dụng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.itemList}>
                    <Text>Yêu cầu xóa tài khoản</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.position}>
                <Button mode="contained" style={styles.button} onPress={() => dispatch(Creators.reset())}> đăng xuất</Button>
            </View>
        </View>
    );
}

export default EditProfile;