import React from 'react';
import { View, TouchableOpacity, Image } from "react-native";
import Carousel from "react-native-snap-carousel";

import PaginationFooter from './PaginationFooter';

const ImageCarousel = (props: any) => {
    const { sliderWidth, data, onPress, indexStart, onSnapToItem } = props;

    return (
        <View>
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                data={data}
                renderItem={({ item }: any) => {
                    return (
                        <TouchableOpacity onPress={onPress}>
                            <Image
                                source={item.source}
                                style={{ height: 400, width: sliderWidth }}
                            />
                        </TouchableOpacity>
                    );
                }}
                firstItem={indexStart}
                onSnapToItem={onSnapToItem}
            />
            <PaginationFooter
                length={data.length}
                indexStart={indexStart}
                dotColor={"black"}
                inactiveDotColor={"rgb(200,149,81)"}
                sliderWidth={sliderWidth}
            />
        </View>
    );
}

export default ImageCarousel;