import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Fontisto from "react-native-vector-icons/Fontisto"
import AntDesign from "react-native-vector-icons/AntDesign"
import { WToast } from "react-native-smart-tip";

import ProductCart from './component/ProductCart';
import styles from './OrderCartScreen.style';
import ProductServices from '../../sevices/api/ProductServices';
import { Button } from 'react-native-paper';
import PaymentProduct from '../payment/PaymentProduct';

const OrderCartScreen = (props: any) => {
    const route = useRoute<any>();
    const [order, setOrder] = useState(true);
    const pay = PaymentProduct();

    const navigation = useNavigation();
    const [info, setInfo] = useState<any>({ name: "", phone: "", address: "" })
    const customer = route.params.data[0].customer
    useEffect(() => {
        if (route.params.info) {
            setInfo(
                {
                    name: route.params.info.name,
                    phone: route.params.info.phone,
                    address: route.params.info.address
                }
            )
        }
        else {
            setInfo({ name: customer.name, phone: customer.username, address: customer.address })
        }
    }, [])
    const sum = route.params.sum + 30000
    const onOrderCart = useCallback(() => {
        const data = {
            nameCustomer: info.name,
            phoneCustomer: info.phone,
            address: info.address,
            status: "order",
            payments: "receipt",
            transportFree: 30000,
            carts: route.params.data
        }
        console.log(data);

        ProductServices.saveOrderCart(data).then((res) => {
            console.log(res);
            if (!res.originalError) {
                const toast = {
                    data: "Đặt hàng thành công ",
                    textColor: "white",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    duration: WToast.duration.LONG,
                    position: WToast.position.CENTER,
                    icon: <AntDesign name="checkcircleo" size={20} color="white" />,
                };
                WToast.show(toast);
            }
        })
    }, [])
    // const customerInfo = useCallback((data) => { setInfo(data) }, [])

    const change = useCallback(() => { navigation.navigate("infoorder") }, [])
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity style={[styles.containerInfo, styles.paddingRight20]} onPress={change}>
                    <View>
                        <Text><Fontisto name="map-marker-alt" size={16} color="rgb(200,149,81)" /> Địa chỉ nhận hàng </Text>
                        <Text style={styles.text}> {info.name} | {info.phone}</Text>
                        <Text style={styles.text}>{info.address} </Text>

                    </View>


                </TouchableOpacity>
                <ProductCart list={route.params.data} sum={sum} />
                <View style={[styles.containerInfo, styles.marginBottom70]}>
                    <View style={styles.textInfo}>
                        <Text style={{ flex: 2 }}>Phương thức thanh toán</Text>
                        <Text style={{ flex: 1 }}>Thanh toán với momo</Text>
                    </View>
                    <View style={[styles.textInfo]}>
                        <Text style={[{ flex: 2 }, styles.text]}>Tổng tiền hàng</Text>
                        <Text style={[{ flex: 1 }, styles.text]}>{route.params.sum}</Text>
                    </View>
                    <View style={[styles.textInfo]}>
                        <Text style={[{ flex: 2 }, styles.text]}>Phí vận chuyển</Text>
                        <Text style={[{ flex: 1 }, styles.text]}>30000</Text>
                    </View>
                    <View style={styles.textInfo}>
                        <Text style={{ flex: 2 }}>Tổng thanh toán</Text>
                        <Text style={{ flex: 1, color: "rgb(200,149,81)" }}>{sum}</Text>
                    </View>
                    <Button
                        color="rgb(200,149,81)"
                        disabled={!order}
                        mode="contained"
                        onPress={pay.onPress}
                    // style={{ width: 150, justifyContent: "center" }}
                    >
                        Thanh toán
                        </Button>
                </View>


            </ScrollView>
            <View style={[styles.positionBottom, styles.flexDirectionRow]}>
                <View
                    style={[
                        styles.positionBottomRight,
                        styles.flexDirectionRow,
                        styles.height50,
                    ]}
                >
                    <View style={[styles.paddingRight20, styles.flexDirectionRow]}>
                        <Text>Tổng tiền:</Text>
                        <Text style={[styles.priceText, styles.marginLeft10]}>{sum}</Text>
                    </View>

                    <Button
                        color="rgb(200,149,81)"
                        onPress={onOrderCart}
                        // disabled={order}
                        mode="contained"
                    > Đặt hàng</Button>
                </View>
            </View>

        </View>
    );
}

export default OrderCartScreen;