import React from 'react';
import { View } from "react-native";
import { Pagination } from "react-native-snap-carousel";
const PaginationFooter = (props: any) => {
    const { length, indexStart, dotColor, inactiveDotColor, sliderWidth } = props;

    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "center",
                position: "absolute",
                bottom: 10,
                width: sliderWidth,
            }}
        >
            <Pagination
                dotsLength={length}
                activeDotIndex={indexStart}
                dotColor={dotColor}
                inactiveDotColor={inactiveDotColor}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        </View>
    );
}

export default PaginationFooter;