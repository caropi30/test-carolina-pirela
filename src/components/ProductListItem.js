import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';

const ProductListItem = ({ onPress, item }) => (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={styles.item}>
            <Image
                style={styles.image}
                source={{
                    uri: item.image,
                }}
            />
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
            <AntDesign name="right" size={20} color="black" />
        </View>
    </TouchableOpacity>
)

export default ProductListItem


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 30,
        paddingVertical: 10,
    },
    item: { flexDirection: 'row' },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 20,
        width: '70%',
    },
})