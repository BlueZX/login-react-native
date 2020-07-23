import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = ({title}) => {
    return(
        <View>
            <Text style={styles.header}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        margin :10,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center'
    },
});

export default Header;