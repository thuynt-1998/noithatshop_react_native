import React, {useCallback, useEffect, useState} from 'react';
// import Modal from 'react-native-modal';
import Modal from 'react-native-modalbox';
import RadioGroup from 'react-native-custom-radio-group';
import InputSpinner from 'react-native-input-spinner';
import {Dimensions, Image, Text, View} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {WToast} from 'react-native-smart-tip';
import {useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './ModalProductDetail.style';
import ProductServices from '../../sevices/api/ProductServices';
import LoginServices from '../../sevices/api/LoginServices';
import Creators from '../../action';

const ModalProductDetail = (props) => {
  const {isOpen, onClosed, title, item, onNavigation} = props;
  const [list, setList] = useState([]);
  const [isSelected, setSelected] = useState(false);
  const [valueSelect, setValue] = useState({code: '', number: 1});
  const dispatch = useDispatch();
  const postCart = useCallback((data) => {
    console.log(data);
    ProductServices.saveCart(data).then((res) => {
      console.log(res);
      if (!res.originalError) {
        onClosed();
        if (title !== 'Mua ngay') {
          const toast = {
            data: 'Đã thêm vào giỏ',
            textColor: 'white',
            backgroundColor: 'rgba(0,0,0,0.6)',
            duration: WToast.duration.LONG,
            position: WToast.position.CENTER,
            icon: <AntDesign name="checkcircleo" size={20} color="white" />,
          };
          WToast.show(toast);
        } else {
          console.log('thuy');
          onNavigation();
        }
      }
    });
  }, []);
  const onPress = async () => {
    const data = {
      number: valueSelect.number,
      price: valueSelect.code.productPrice,
      product: item,
    };
    const auth = await LoginServices.getItem();
    if (auth) {
      console.log(auth);
      postCart(data);
    } else {
      onNavigation();
    }
  };
  const onChange = useCallback(
    (value) => {
      var select = item.productDetail.filter((detail) => detail.code === value);
      setValue({...valueSelect, code: select[0]});
      setSelected(true);
    },
    [valueSelect],
  );
  const onChangeNumber = useCallback(
    (value) => setValue({...valueSelect, number: value}),
    [valueSelect],
  );
  const onList = useCallback((item) => setList(item), []);
  const data = useCallback(() => {
    var list1 = [];
    for (var i = 0; i < item.productDetail.length; i++) {
      var contants = list.filter(
        (words) => words.label === item.productDetail[i].colors,
      );
      if (contants.length === 0) {
        list1 = list1.concat({
          label: item.productDetail[i].colors,
          value: item.productDetail[i].code,
        });
      }
    }
    onList(list1);
  }, [list]);
  useEffect(() => {
    data();
  }, []);
  console.log(item);
  return (
    // <Modal
    //   isVisible={isOpen}
    //   useNativeDriver
    //   style={{justifyContent: 'flex-end', margin: 0}}
    //   onBackdropPress={onClosed}
    //   swipeDirection="down">
    <Modal
      isOpen={isOpen}
      position="bottom"
      style={[styles.containerModal, styles.borderTopRadius]}
      onClosed={onClosed}
      useNativeDriver>
      <View style={[styles.containerModal, styles.borderTopRadius]}>
        <View style={[styles.borderTopRadius, styles.relative]}>
          <View style={[styles.containerImageModal]}>
            <Image
              source={{
                uri:
                  'https://baya.vn/media/catalog/product/cache/118c277d36880e995352bb5114dbca5e/a/c/accord_coffee_table_baya_5321.jpg',
              }}
              style={[styles.borderTopRadius, styles.imageSize]}></Image>
            <View style={styles.marginLeft10}>
              <Text>{item.name}</Text>
              <View style={styles.flexDirectionRow}>
                {valueSelect.code.productPrice !==
                  valueSelect.code.realPrice && (
                  <Text style={styles.delText}>
                    {valueSelect.code.productPrice}
                  </Text>
                )}
                <Text style={[styles.priceText, styles.marginLeft10]}>
                  {valueSelect.code && valueSelect.code.realPrice}
                </Text>
              </View>
              <Text style={styles.colorTextOne}>
                Kho: {valueSelect.code.numberStock}
              </Text>
            </View>
          </View>
          <Divider />
          <View style={styles.padding10}>
            <Text>Màu sắc</Text>

            <RadioGroup
              radioGroupList={list}
              containerStyle={styles.containerRadio}
              buttonContainerStyle={styles.buttonRadio}
              buttonTextStyle={styles.buttonTextRadio}
              buttonContainerActiveStyle={styles.containerButtonActiveRadio}
              buttonTextActiveStyle={styles.textButtonActionRadio}
              onChange={onChange}
            />
          </View>
          <Divider />

          <View style={[styles.containerNumber]}>
            <Text>Số lượng</Text>
            <InputSpinner
              max={10}
              min={1}
              step={1}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              initialValue={1}
              onChange={onChangeNumber}
              editable={false}
              type={'int'}
              buttonStyle={{height: 30, width: 30}}
              style={{alignItems: 'center'}}
            />
          </View>
          <Divider />

          <Button
            mode="contained"
            color={'rgb(200,149,81)'}
            labelStyle={styles.colorWhite}
            style={styles.marginButonModal}
            disabled={!isSelected}
            contentStyle={styles.heightButtonModal}
            onPress={onPress}>
            {title}
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalProductDetail;
