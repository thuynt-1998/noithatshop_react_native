import React, { memo } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import InputSpinner from 'react-native-input-spinner';
import styles from "../CartBuy.style";
function ItemProductCheck(props: any) {
  const { item, isChecking, onChecked } = props;
  console.log(item);

  const detail = item.product.productDetail[0];
  return (
    <View style={[styles.viewProduct, styles.flexDirectionRow]}>
      <TouchableOpacity onPress={() => onChecked(item, isChecking)}>
        <Checkbox
          status={isChecking ? "checked" : "unchecked"}
          color="rgb(200,149,81)"
        />
      </TouchableOpacity>

      <View style={styles.flex1}>
        <Image
          source={{
            uri:
              "https://product.hstatic.net/1000409762/product/sp9-2_5cbcdc59238643d4a639ccc4278a6492_large.jpg",
          }}
          style={[styles.height100, styles.flex1]}
          resizeMode="center"
        ></Image>
      </View>
      <View style={styles.infoProduct}>
        <Text style={styles.nameProduct}>{item.product.name}</Text>
        <View style={styles.flexDirectionRow}>
          <Text style={styles.delText}>{detail.realPrice}</Text>
          <Text style={styles.priceText}>{detail.productPrice}</Text>
        </View>
        <Text style={styles.colorsProduct}>Màu sắc: {detail.colors} </Text>
        {/* <NumericInput
          type="plus-minus"
          valueType="integer"
          minValue={1}
          maxValue={20}
          initValue={1}
          totalHeight={30}
          totalWidth={100}
          initValue={item.number}
          onChange={(value) => console.log(value)}
          rounded
          editable={false}
        /> */}
        <InputSpinner
          max={20}
          min={1}
          step={2}
          colorMax={'#f04048'}
          colorMin={'#40c5f4'}
          initialValue={item.number}
          onChange={(value) => console.log(value)}
          editable={false}
          type={'int'}
        />
      </View>
    </View>
  );
}

export default memo(ItemProductCheck);
