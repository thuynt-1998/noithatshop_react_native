import React, {memo, useCallback, useEffect, useState} from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import ImageView from "react-native-image-view";
import {url} from '../../contants/https-base';

import ModalProductDetail from '../../contants/modal/ModalProductDetail';
import RoomServices from '../../sevices/api/RoomServices';
import ButtonPosition from './component/button/ButtonPosition';
import ImageCarousel from './component/ImageCarousel';
import InfoProduct from './component/infoproduct/InfoProduct';
import PaginationFooter from './component/PaginationFooter';

const {width: viewportWidth} = Dimensions.get('window');

export const sliderWidth = viewportWidth;
const ProductDetailScreen = (props) => {
  const [isVisible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState({isOpen: false, title: 'Mua ngay'});
  const onModal = useCallback((title) => setModal({title, isOpen: true}), []);
  const onClosed = useCallback(() => setModal({...modal, isOpen: false}), []);
  const onVisible = useCallback((visiable) => setVisible(visiable), []);
  const onIndex = useCallback((index) => setIndex(index), []);
  const {route, navigation} = props;
  const [images, setImages] = useState([]);
  const onNavigation = useCallback(() => {
    navigation.navigate('cart');
  }, []);
  const convertImages = useCallback(() => {
    var image = route.params.data.productDetail;
    var data = [];
    for (var i = 0; i < image.length; i++) {
      for (var j = 0; j < image[i].images.length; j++) {
        data = data.concat({
          source: {uri: url + image[i].images[j].link},
          width: 300,
          height: 400,
        });
      }
    }
    setImages(data);
  }, []);
  useEffect(() => {
    convertImages();
  }, []);

  return (
    <>
      {isVisible ? (
        <View>
          <ImageView
            images={images}
            imageIndex={index}
            isVisible={isVisible}
            animationType="none"
            renderFooter={() => (
              <PaginationFooter
                length={images.length}
                indexStart={index}
                dotColor={"rgb(255, 255, 255)"}
                inactiveDotColor={"white"}
                sliderWidth={sliderWidth}
              />
            )}
            onClose={() => onVisible(false)}
            onImageChange={onIndex}
          />
        </View>
      ) : (
        <View style={{flex: 1}}>
          <ScrollView>
            <View style={{marginBottom: 40, flex: 1}}>
              <ImageCarousel
                sliderWidth={sliderWidth}
                data={images}
                onPress={() => onVisible(true)}
                indexStart={index}
                onSnapToItem={onIndex}
              />
              <InfoProduct />
            </View>
          </ScrollView>
          {modal.isOpen && (
            <ModalProductDetail
              isOpen={modal.isOpen}
              onClosed={onClosed}
              title={modal.title}
              item={route.params.data}
              onNavigation={onNavigation}
            />
          )}
          <ButtonPosition onModal={onModal} />
        </View>
      )}
    </>
  );
};

export default memo(ProductDetailScreen);
