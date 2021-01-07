import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import styles from './InfoProduct.style';

const InfoProduct = (props: any) => {
    const route = useRoute<any>();
    const data = route.params.data;
    const [itemSelect, setItem] = useState(data.productDetail[0])

    return (
        <View>
            <View style={styles.infoProduct}>
                <View>
                    <Text style={styles.titleProduct}>{data.name}</Text>
                </View>
                <View>
                    <Text style={styles.priceText}> {itemSelect.productPrice}</Text>
                    <Text style={styles.textLine}>{itemSelect.realPrice !== itemSelect.productPrice && itemSelect.realPrice}</Text>
                </View>
            </View>
            <View style={styles.containerDetail}>
                <Text style={[styles.textDetail, styles.paddingHorizontal10]}>
                    Chi tiết sản phẩm
                </Text>

                <Divider />
                <View style={styles.paddingVertical10}>
                    <View style={[styles.containerItemDettail]}>
                        <Text style={styles.flexOne}>Chất liệu</Text>
                        <Text style={styles.flexOne}>{data.material}</Text>
                    </View>
                    <View style={[styles.containerItemDettail]}>
                        <Text style={styles.flexOne}>Bảo hành</Text>
                        <Text style={styles.flexOne}>{data.guarantee} tháng</Text>
                    </View>
                    <View style={[styles.containerItemDettail]}>
                        <Text style={styles.flexOne}>Kích thước</Text>
                        <Text style={styles.flexOne}>{data.size}</Text>
                    </View>
                    <View style={[styles.containerItemDettail]}>
                        <Text style={styles.flexOne}>Xuất xứ</Text>
                        <Text style={styles.flexOne}>{data.source}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default InfoProduct;