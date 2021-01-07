import React from 'react';
import { Button, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import styles from '../CartBuy.style';

const BottomCheck = (props: any) => {
    const { isCheckedAll, onCheckedAll, sum, onPressSave } = props
    return (
        <View style={[styles.positionBottom, styles.flexDirectionRow]}>
            <View
                style={[
                    styles.positionBottomLeft,
                    styles.flexDirectionRow,
                    styles.height50,
                ]}
            >
                <Checkbox
                    status={isCheckedAll ? "checked" : "unchecked"}
                    color="rgb(200,149,81)"
                    onPress={onCheckedAll}
                />
                <Text style={styles.paddingTop10}>Tất cả</Text>
            </View>
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
                    style={styles.height50}
                    title="Mua ngay"
                    color="rgb(200,149,81)"
                    onPress={onPressSave}
                />
            </View>
        </View>
    );
}

export default BottomCheck;