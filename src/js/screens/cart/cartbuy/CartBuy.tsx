import React, { memo, useCallback, useEffect, useState } from "react";
import { View, FlatList, StatusBar } from "react-native";

import styles from "./CartBuy.style";
import LoginServices from "../../../sevices/api/LoginServices";
import { useDispatch } from "react-redux";
import Creators from "../../../action";
import BottomCheck from "./component/BottomCheck";
import ItemProductCheck from "./component/ItemProductCheck";
import ListEmpty from "../../../contants/ListEmpty";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartScreen = (props: any) => {
    const [isCheckedAll, setCheckedAll] = useState(false);
    const [list, setList] = useState([])
    const [isChecked, setChecked] = useState(false);
    const [data, setData] = useState<Array<any>>([]);
    const navigation = useNavigation()
    const onCheckedAll = useCallback(() => {
        if (isCheckedAll) {
            setCheckedAll(false);
            setData([]);

        } else {
            setCheckedAll(true);
            setData(list)
        }
    }, [isCheckedAll, data, isChecked, list]);

    const onData = useCallback((data) => setData(data), [data]);
    const valueSum = useCallback(() => {
        var sum = 0;
        if (data.length > 1) {
            for (var i = 0; i < data.length; i++) {
                sum = sum + data[i].price
            }

        }
        else if (data.length === 1) {
            sum = data[0].price

        }
        else if (data.length === 0) { sum = 0 }

        return sum;
    }, [data])
    const dispatch = useDispatch();
    const onChecked = useCallback(
        (selectItem, isChecking) => {
            setChecked(!isChecked);
            if (!isChecking) {
                onData(data.concat(selectItem));
                if (data.length === list.length - 1) {
                    if (isCheckedAll) {
                        setCheckedAll(false);
                        setData([]);

                    } else {
                        setCheckedAll(true);
                        setData(list)
                    }
                }

            } else {
                onData(data.filter((item) => item.id !== selectItem.id));
                setCheckedAll(false);
                setData([]);
            }


        },
        [isChecked, data, isCheckedAll, list]
    );
    const renderItem = useCallback(
        ({ item }) => {
            const isChecking =
                data.filter((itemData) => item === itemData).length === 1
                    ? true
                    : false;
            return (
                <>
                    {list.length !== 0 ? (
                        <ItemProductCheck
                            item={item}
                            isChecking={isChecking}
                            onChecked={onChecked}
                        />
                    ) : (
                            <ListEmpty />
                        )}
                </>
            );
        },
        [isChecked, data, isCheckedAll, list]
    );
    const fetchCart = useCallback(() => {
        LoginServices.getCart().then((res: any) => {
            console.log(res);
            if (!res.originalError) {
                setList(res.data);
            }
        });
    }, [list]);
    useEffect(() => {
        fetchCart();
    }, []);
    const sum = valueSum();

    const onPressSave = useCallback(() => {
        navigation.navigate("cartorder", { data, sum: valueSum() })
    }, [data])

    return (

        <View style={[styles.flex1, { marginTop: 40 }]}>
            <View style={styles.marginButton50}>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item: any) => item.id.toString()}
                    extraData={isChecked}
                />
            </View>
            <BottomCheck
                sum={sum}
                isCheckedAll={isCheckedAll}
                onCheckedAll={onCheckedAll}
                onPressSave={onPressSave} />
        </View>


    );
}

export default memo(CartScreen);