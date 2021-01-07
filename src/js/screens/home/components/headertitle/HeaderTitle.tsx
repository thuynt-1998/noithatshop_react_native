import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderTitle.style"
function HeaderTitle(props: { label: any }) {
    const { label } = props;
    return (
        <View style={styles.containerHeader}>
            <Text
                style={styles.textHeader}
            >
                {label}
            </Text>
            <View style={styles.underlineTitle}>
            </View>
        </View>
    );
}

export default HeaderTitle;
