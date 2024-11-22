import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const SquareButton = ({ onPress, title, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
        <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
)

export default SquareButton

const styles = StyleSheet.create({
    btn: {
        width: 100,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})
