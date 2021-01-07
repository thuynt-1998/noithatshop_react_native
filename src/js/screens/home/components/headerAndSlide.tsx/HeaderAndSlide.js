import React from 'react';
import {View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Slideshow from 'react-native-image-slider-show';

import styles from './HeaderAndSlide.style';
import {slideData} from '../../data';

const HeaderAndSlide = () => {
  return (
    <>
      <View style={{marginTop: 120}}>
        <Slideshow
          indicatorColor="white"
          indicatorSelectedColor={'black'}
          dataSource={slideData}
        />
      </View>
    </>
  );
};

export default HeaderAndSlide;
