import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

/* Setting default props for when none are passed in */
Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#ffdb58'
    },

    text: {
        color: '#000',
fontSize: 23,
textAlign: 'center'

    }
})

export default Header;