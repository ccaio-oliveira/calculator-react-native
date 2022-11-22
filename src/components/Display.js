import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})

export default ({ value }) => {
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{value}</Text>
        </View>
    )
}